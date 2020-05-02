import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  }, [navigation]);
  return (
    <View>
      <Text>Halaman Splash</Text>
      <Text>loremsdfsa df asdf sdf s df</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
