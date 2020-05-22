import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils';
import {Bcount} from '../../../components';

const ListCart = ({img, name, price, space}) => {
  return (
    <View style={[styles.wrapper, space && {marginBottom: space}]}>
      <View style={styles.card}>
        <View style={styles.img}>
          <Image
            source={{
              uri: img,
            }}
            style={styles.imageCart}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.textTitle}> {name}</Text>
          <Text style={styles.textPrice}>Rp {price}</Text>
        </View>
        <View style={styles.buttom}>
          <Bcount title="-" />
          <Text style={styles.textCount}>1</Text>
          <Bcount title="+" />
        </View>
      </View>
    </View>
  );
};

export default ListCart;

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    position: 'relative',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    height: 74,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 1,
    // overflow: 'hidden',
  },
  img: {
    width: 82,
  },
  content: {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
  },
  textTitle: {
    fontSize: 16,
    height: 45,
  },
  textPrice: {
    fontSize: 18,
    color: colors.gOrange,
    fontWeight: 'bold',
  },
  buttom: {
    width: 94,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCart: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    position: 'absolute',
    top: -3,
    left: 0,
    borderRadius: 10,
  },
  textCount: {
    fontSize: 16,
    margin: 3,
    textAlign: 'center',
    width: 20,
  },
});
