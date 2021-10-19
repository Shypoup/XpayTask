import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchMovieCredits, fetchMovieDetails} from '../../apis/movies';

import GenerBadge from '../../components/GenerBadge';
import {IMAGEBASEURL} from '../../constants/baseUrl';
import Loader from '../../components/Loader';
import styles from './styles';

const MovieDetailsScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const [loading, setLoading] = useState(true);
  const [castLoading, setCastLoading] = useState(true);

  // Get movie Details
  const getMovieDetails = async () => {
    const response = await fetchMovieDetails(id);
    setMovie(response);
    setLoading(false);
  };

  //get Movie Cast
  const getMovieCredits = async () => {
    const response: any = await fetchMovieCredits(id);
    setCredits(response.cast);
    setCastLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
    getMovieCredits();
  }, []);

  // Render Geners
  const renderGenres = () => {
    return movie.genres.map(genre => {
      return <GenerBadge key={Math.random()} name={genre.name} />;
    });
  };

  // Render credits
  const renderCredits = () => {
    return credits.map(item => {
      return (
        <View>
          {/* check if image not sent */}
          {item.profile_path ? (
            <Image
              source={{uri: IMAGEBASEURL + item.profile_path}}
              style={styles.profile}
            />
          ) : (
            <Image
              source={require('../../assets/noImageAvailble.png')}
              style={styles.profile}
            />
          )}
          <Text style={styles.actorName}>{item.original_name}</Text>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            {/* back buttton */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/backArrow.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>

            {/* poster */}
            {/* check if image not sent */}
            {movie.poster_path ? (
              <Image
                source={{uri: IMAGEBASEURL + movie.poster_path}}
                style={styles.poster}
              />
            ) : (
              <Image
                source={require('../../assets/noImageAvailble.png')}
                style={styles.poster}
              />
            )}

            {/* Details */}
            <Text style={styles.title}>{movie.original_title}</Text>
            <Text style={styles.rate}>%{+movie.vote_average * 10}</Text>

            {/* overview */}
            <Text style={styles.sectionHeader}>Overview</Text>
            <Text style={styles.overview}>
              {movie.overview || 'No description found'}
            </Text>

            {/* genres */}
            {movie.genres.length > 0 && (
              <>
                <Text style={styles.sectionHeader}>Genres</Text>
                <View>
                  <ScrollView
                    style={styles.scrollSection}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {renderGenres()}
                  </ScrollView>
                </View>
              </>
            )}

            {/* Credits */}
            <View>
              {castLoading ? (
                <Loader />
              ) : (
                <>
                  {credits.length > 0 && (
                    <>
                      <Text style={styles.sectionHeader}>Credits</Text>
                      <ScrollView
                        style={styles.scrollSection}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {renderCredits()}
                      </ScrollView>
                    </>
                  )}
                </>
              )}
            </View>
          </>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetailsScreen;
