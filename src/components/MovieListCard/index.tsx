import {BASEURL, IMAGEBASEURL} from '../../constants/baseUrl';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import GenerBadge from '../GenerBadge';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const geners = [{name: 'test'}, {name: 'test'}, {name: 'test'}, {name: 'test'}];

interface MovieListCardInterface {
  key: string;
  id: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
  image: string;
  genres: [];
}
const MovieListCard = (props: MovieListCardInterface) => {
  const navigation = useNavigation();
  const renderGener = ({item}) => {
    return <GenerBadge name={item.name} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('movieDetails', {id: props.id})}>
      {/* Image */}
      {props.image ? (
        <Image
          source={{
            uri: IMAGEBASEURL + props.image,
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      ) : (
        <Image
          source={require('../../assets/noImageAvailble.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      )}

      {/* Data */}
      <View style={styles.dataSection}>
        <Text style={styles.movieName}>{props.title}</Text>
        <Text style={styles.movieData}>{props.releaseDate}</Text>
        {/* Geners */}
        <View style={styles.generSection}>
          <FlatList
            data={props.genres}
            renderItem={renderGener}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={styles.genreList}
            ListFooterComponent={
              <Text style={styles.movieRate}>{props.voteAverage}%</Text>
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieListCard;
