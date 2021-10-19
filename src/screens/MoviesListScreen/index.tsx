import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  fetchGenres,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../../apis/movies';

import Loader from '../../components/Loader';
import MovieListCard from '../../components/MovieListCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';
import styles from './styles';

const taps = ['Upcoming', 'Popular', 'Top rated'];
const MoviesListScreen = () => {
  const [activeTap, setActiveTap] = useState(0);
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  // sepicify with request will be called according to active tap
  const specifyRequest = async (page?: string) => {
    let response;
    switch (activeTap) {
      case 0:
        response = await fetchUpcomingMovies(page);
        break;
      case 1:
        response = await fetchPopularMovies(page);
        break;
      case 2:
        response = await fetchTopRatedMovies(page);
        break;

      default:
        response = await fetchUpcomingMovies(page);
        break;
    }

    return response;
  };

  // Get movies list
  const getMovies = async () => {
    setLoading(true);
    const genres = await fetchGenres();
    const response = await specifyRequest();
    setGenres(genres);
    setMovies(response.results);

    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [activeTap]);
  // render movie item

  const renderItem = ({item}) => {
    // get genres
    const selectedGenres = genres.filter(genre =>
      item.genre_ids.includes(genre.id),
    );

    return (
      <MovieListCard
        key={item.id}
        id={item.id}
        title={item.original_title}
        releaseDate={item.release_date}
        voteAverage={+item.vote_average * 10}
        image={item.poster_path}
        genres={selectedGenres}
      />
    );
  };

  // handle what doing on reach end of list
  const handleOnEndReached = async () => {
    if (!isLastPage) {
      const nextPage = currentPage + 1;

      setLoadingMore(true);
      const response = await specifyRequest(nextPage);

      const updatedMovies = [...movies, ...response.results];
      setMovies(updatedMovies);
      setIsLastPage(response.page >= response.total_pages);
      setCurrentPage(response.page);
      setLoadingMore(false);
    }
  };

  // render tap buttons (Upcoming - popular - top rated)
  const renderTaps = () => {
    return taps.map((tap, index) => {
      return (
        <TouchableOpacity
          key={Math.random()}
          onPress={() => setActiveTap(index)}
          style={activeTap === index ? styles.activeTap : styles.notActiveTap}>
          <Text
            style={
              activeTap === index
                ? styles.activeTapText
                : styles.notActiveTapText
            }>
            {tap}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertext}>Movies</Text>

      {/* Choose buttons */}
      <View style={styles.buttonsSection}>{renderTaps()}</View>
      {/* movies list */}
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={handleOnEndReached}
          ListFooterComponent={() =>
            loadingMore && (
              <ActivityIndicator color={colors.mainColor} size="small" />
            )
          }
        />
      )}
    </SafeAreaView>
  );
};

export default MoviesListScreen;
