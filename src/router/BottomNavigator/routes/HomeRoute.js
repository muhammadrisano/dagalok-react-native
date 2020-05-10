import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Search} from '../../../pages';

const Stack = createStackNavigator();
const HomeRoute = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoute;
