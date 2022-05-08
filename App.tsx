import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {navigationRef} from './src/navigation/rootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Navigator from './src/navigation/home.stack';
import Footer from './src/components/footer/footer';
import Header from './src/components/header/header';
import store from './src/redux/store';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Header />
            <Navigator />
            <Footer />
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
