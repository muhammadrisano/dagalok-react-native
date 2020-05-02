import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({placeholder, label}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#b2bec3',
    borderWidth: 1,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: '#5E5E5E',
  },
});
