import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils';

const HistoryCart = ({title, date, price, img, space}) => {
  return (
    <View style={[styles.wrapper, space && {marginBottom: space}]}>
      <View style={styles.boxImage}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.boxContent}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      <View style={styles.boxPrice}>
        <Text style={styles.textPrice}>Rp {price}</Text>
      </View>
    </View>
  );
};

export default HistoryCart;

const styles = StyleSheet.create({
  wrapper: {
    height: 70,
    flexDirection: 'row',
  },
  boxImage: {
    width: 70,
    backgroundColor: '#fff',
    borderRadius: 18,
    elevation: 1,
  },
  boxContent: {
    flex: 1,
    paddingLeft: 10,
  },
  boxPrice: {
    width: 90,
  },
  textPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.gOrange,
  },
  textTitle: {
    fontWeight: 'bold',
    color: colors.text.title,
  },
  textDate: {
    color: colors.text.default,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 18,
    resizeMode: 'cover',
  },
});
