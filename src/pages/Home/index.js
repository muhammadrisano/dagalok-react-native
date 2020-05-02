import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.btnHeader} />
      <Text>ini home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bgGrey,
  },
  btnHeader: {
    flexDirection: 'row',
  },
});
export default Home;
