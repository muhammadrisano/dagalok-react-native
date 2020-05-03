import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {colors} from '../../../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchInput = ({placeholder, onPress, onChangeText}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <TouchableRipple style={styles.btnSearch} onPress={onPress}>
        <FontAwesome5 name="search" size={25} color="white" />
      </TouchableRipple>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    elevation: 1,
    borderRadius: 12,
    // backgroundColor: 'blue'
  },
  input: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: 52,
    backgroundColor: '#fff',
    // elevation: 1,
    width: '95%',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 44,
  },
  btnSearch: {
    height: 56,
    width: 56,
    backgroundColor: colors.gDefault,
    position: 'absolute',
    right: 0,
    top: -2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
