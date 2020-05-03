import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../utils';

const Bmenu = () => {
  return (
    <View style={styles.wrapper}>
      <FontAwesome5 name="bars" size={24} color={colors.text.default} />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    width: 42,
    borderRadius: 10,
    // borderWidth: 1,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default Bmenu;
