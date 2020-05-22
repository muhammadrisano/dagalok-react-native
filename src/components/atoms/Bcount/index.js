import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Bcount = ({title}) => {
  return (
    <View
      style={[
        styles.wrapper,
        title === '+'
          ? {backgroundColor: colors.gDefault}
          : {backgroundColor: colors.gDisable},
      ]}>
      <Text style={styles.textCount}>{title}</Text>
    </View>
  );
};

export default Bcount;

const styles = StyleSheet.create({
  wrapper: {
    height: 24,
    width: 24,
    borderRadius: 5,
    backgroundColor: colors.gDefault,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
