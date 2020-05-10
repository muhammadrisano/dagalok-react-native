import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Register, Home, WelcomeAuth, Profile} from '../pages';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    // <Text>hello world</Text>
    <Stack.Navigator initialRouteName="BottomNavigator">
      {/* <Stack.Screen name="BottomNavigator" component={BottomNavigator} /> */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
    </Stack.Navigator>
  );
};

export default Router;
