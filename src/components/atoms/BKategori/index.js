import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/';

const BKategori = ({img, title}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={img} style={styles.imgMenu} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default BKategori;

const styles = StyleSheet.create({
  wrapper: {
    width: 120,
    height: 35,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.gDefault,
    marginLeft: 15,
    elevation: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: colors.text.default,
    fontSize: 16,
  },
  imgMenu: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: 5,
  },
});
