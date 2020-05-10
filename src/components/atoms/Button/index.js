import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.textRegister}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFC529',
    borderRadius: 25,
  },
  textRegister: {
    fontWeight: 'bold',
    color: '#272D2F',
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 15,
  },
});
