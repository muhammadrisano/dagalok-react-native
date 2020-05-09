import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/';

const Card = ({img, title, price, satuan, from}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      />
      <View style={styles.wrapText}>
        <Text style={styles.textTitle}>{title}</Text>
        <View style={styles.wrapPrice}>
          <Text style={styles.textPrice}>Rp. {price}</Text>
          <Text style={styles.textStatuan}>/ {satuan}</Text>
        </View>
        <Text style={styles.textFrom}>Dari : {from}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    height: 213,
    width: 170,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  img: {
    width: 170,
    height: 145,
    resizeMode: 'cover',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gOrange,
  },
  wrapText: {
    width: '100%',
    height: '100%',
    padding: 5,
  },
  wrapPrice: {
    flexDirection: 'row',
  },
  textStatuan: {
    marginLeft: 10,
  },
  textFrom: {
    fontSize: 12,
    color: colors.aGrey,
  },
});
