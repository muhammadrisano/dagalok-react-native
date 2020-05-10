import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Profile, Cart, Category, History} from '../../pages';
import HomeRoute from './routes/HomeRoute';
import {colors} from '../../utils';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Category"
      tabBarOptions={{
        activeTintColor: colors.gDefault,
        style: {paddingTop: 12, height: 60, backgroundColor: '#fff'},
        labelStyle: {marginTop: 1},
        inactiveTintColor: colors.aGrey,
      }}>
      <Tab.Screen
        name="HomeRoute"
        component={HomeRoute}
        options={{
          tabBarLabel: 'hello',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Keranjang',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Kategori',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="sliders-h" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
