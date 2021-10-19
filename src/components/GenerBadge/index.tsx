import {Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

interface GenerBadgeInterface {
  name: string;
  key: any;
}
const GenerBadge = (props: GenerBadgeInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{props.name}</Text>
    </View>
  );
};

export default GenerBadge;
