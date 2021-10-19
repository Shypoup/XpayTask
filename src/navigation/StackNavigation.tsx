import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MoviesListScreen from '../screens/MoviesListScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="moviesList"
          component={MoviesListScreen}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetailsScreen}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
