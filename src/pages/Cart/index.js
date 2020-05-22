import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Bback, Button, ListCart} from '../../components';
import {colors} from '../../utils';
import {FlatList} from 'react-native-gesture-handler';

const Cart = () => {
  const [product, setProduct] = useState([
    {
      name: 'Sayur Baya',
      price: 10000,
      img:
        'https://portalmadura.com/wp-content/uploads/2020/01/sayur-bayam.jpg',
    },
    {
      name: 'Ikan Lele',
      price: 12000,
      img:
        'https://www.pktkpkpjaktim.com/wp-content/uploads/2019/07/ikan-lele.jpg',
    },
    {
      name: 'Sayur Kangkung',
      price: 10000,
      img:
        'https://cdn-radar.jawapos.com/uploads/radarsolo/news/2018/10/11/inilah-manfaat-tersembunyi-kangkung_m_98283.jpeg',
    },
    {
      name: 'Cabe Merah',
      price: 10000,
      img:
        'https://www.palapapos.co.id/myigniter/assets/uploads/0e979-cabe-merah.jpg',
    },
    {
      name: 'Sayur Baya',
      price: 10000,
      img:
        'https://portalmadura.com/wp-content/uploads/2020/01/sayur-bayam.jpg',
    },
  ]);
  return (
    <View style={styles.wrapper}>
      <Bback />
      <Text style={styles.textTitle}>My Cart</Text>
      <View style={styles.conList}>
        <FlatList
          style={{paddingTop: 12}}
          data={product}
          renderItem={({item}) => (
            <ListCart
              img={item.img}
              price={item.price}
              name={item.name}
              space={10}
            />
          )}
        />
      </View>
      <View style={styles.conCount}>
        <Text style={styles.textTotal}>Total : Rp. 50.000</Text>
        <Button title="Cekout" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  textTitle: {
    fontSize: 22,
    marginTop: 4,
    marginBottom: 4,
  },
  conList: {
    flex: 1,
  },
  conCount: {
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textTotal: {
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.title,
    marginTop: 8,
    marginBottom: 8,
  },
  space(value) {
    return {
      height: value,
    };
  },
});
export default Cart;
