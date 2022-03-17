import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {navigationRef} from './src/navigation/rootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/home.stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
