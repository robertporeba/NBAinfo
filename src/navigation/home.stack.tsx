import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LiveGames from '../screens/live-games/live-games';
import History from '../screens/history/history';
import Future from '../screens/future/future';
import Stats from '../screens/stats/stats';
import {FUTURE, HISTORY, LIVE_GAMES, STATS} from './navigation-types';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={LIVE_GAMES} component={LiveGames} />
      <Stack.Screen name={HISTORY} component={History} />
      <Stack.Screen name={FUTURE} component={Future} />
      <Stack.Screen name={STATS} component={Stats} />
    </Stack.Navigator>
  );
}

export default HomeStack;
