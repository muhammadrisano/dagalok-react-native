import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Bprofile = () => {
  return (
    <View style={styles.wrapper}>
      <FontAwesome5 name="user-alt" size={25} color="white" />
    </View>
  );
};

export default Bprofile;

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    width: 45,
    backgroundColor: colors.gDefault,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
