import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {colors} from '../../utils/colors';
import {SearchInput} from '../../components/moduls';
import {Card} from '../../components/atoms';

const Search = () => {
  const [dataItem, setDataItem] = useState([
    {
      id: 1,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
    {
      id: 2,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
    {
      id: 3,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
    {
      id: 4,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
    {
      id: 5,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
    {
      id: 6,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
    {
      id: 7,
      title: 'Sayur Bayam',
      img:
        'https://madani-news.com/wp-content/uploads/2020/03/IMG_20200331_090353.jpg',
      price: 200000,
      satuan: 'Kg',
      from: 'Pasar Raya',
    },
  ]);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textWelcome}>
        Cari yang Anda Butuhkan Sekarang...
      </Text>
      <View style={styles.space(20)} />
      <SearchInput placeholder="Cari..." />
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.flatRow}
        data={dataItem}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            from={item.from}
            satuan={item.satuan}
          />
        )}
      />
    </View>
  );
};
// sds
export default Search;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  textWelcome: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.title,
  },
  space(height) {
    return {
      height,
    };
  },
  flatRow: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
  },
});
