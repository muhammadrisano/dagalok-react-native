import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/';

const Card = ({img, title, price, satuan, from, home}) => {
  return (
    <View style={[styles.wrapper, home && styles.styleHome]}>
      <Image
        style={[styles.img, home && styles.styleHome]}
        source={{
          uri: img,
        }}
      />
      <View style={styles.wrapText}>
        <Text style={[styles.textTitle, home && styles.textHome]}>{title}</Text>
        <View style={styles.wrapPrice}>
          <Text style={[styles.textPrice, home && styles.textHome]}>
            Rp. {price}
          </Text>
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
    width: 155,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  styleHome: {
    width: 170,
  },
  img: {
    width: 155,
    height: 145,
    resizeMode: 'cover',
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  textHome: {
    fontSize: 16,
  },
  textPrice: {
    fontSize: 14,
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
