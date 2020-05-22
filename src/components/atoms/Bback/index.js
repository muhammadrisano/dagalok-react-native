import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../utils';

const Bback = () => {
  return (
    <View style={styles.wrapper}>
      <FontAwesome5 name="arrow-left" size={22} color={colors.text.default} />
    </View>
  );
};

export default Bback;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    width: 42,
    borderRadius: 42 / 2,
    elevation: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
