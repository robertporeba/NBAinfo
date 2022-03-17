import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LiveGames from './screens/live-games/live-games';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LiveGames" component={LiveGames} />
    </Stack.Navigator>
  );
}

export default HomeStack;
