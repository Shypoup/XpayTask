import {StatusBar, Text, View} from 'react-native';

import type {Node} from 'react';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {colors} from './src/styles/colors';

const App: () => Node = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.mainBackground}
      />

      <StackNavigation />
    </>
  );
};

export default App;
