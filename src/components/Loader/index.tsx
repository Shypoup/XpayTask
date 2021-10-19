import {ActivityIndicator, View} from 'react-native';

import React from 'react';
import {colors} from '../../styles/colors';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.mainColor} />
    </View>
  );
};

export default Loader;
