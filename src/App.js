import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/BottomNavigator';
import {Provider} from 'react-redux';
import {store} from './redux';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <StatusBar barStyle="dark-content" /> */}
        {/* <SafeAreaView> */}
        <Router />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
