import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../utils/';
import {Bback, HistoryCart} from '../../components';

const History = () => {
  const [history, setHistory] = useState([
    {
      id: 1,
      title: 'Kankung',
      img: 'https://eksfresh.com/wp-content/uploads/2020/03/kangkung-fp.jpg',
      date: '10/12/2019',
      price: 10000,
    },
    {
      id: 2,
      title: 'Bayam',
      img: 'https://eksfresh.com/wp-content/uploads/2020/03/kangkung-fp.jpg',
      date: '10/12/2019',
      price: 15000,
    },
    {
      id: 3,
      title: 'Kankung',
      img: 'https://eksfresh.com/wp-content/uploads/2020/03/kangkung-fp.jpg',
      date: '10/12/2019',
      price: 10000,
    },
    {
      id: 4,
      title: 'Kankung',
      img: 'https://eksfresh.com/wp-content/uploads/2020/03/kangkung-fp.jpg',
      date: '10/12/2019',
      price: 10000,
    },
    {
      id: 5,
      title: 'Bayam',
      img: 'https://eksfresh.com/wp-content/uploads/2020/03/kangkung-fp.jpg',
      date: '10/12/2019',
      price: 15000,
    },
    {
      id: 6,
      title: 'Kankung',
      img: 'https://eksfresh.com/wp-content/uploads/2020/03/kangkung-fp.jpg',
      date: '10/12/2019',
      price: 10000,
    },
  ]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.space(10)} />
      <Bback />
      <View style={styles.space(5)} />
      <Text style={styles.textTitle}>Halaman History</Text>
      <View style={styles.contList}>
        <FlatList
          data={history}
          renderItem={({item}) => (
            <HistoryCart
              img={item.img}
              title={item.title}
              date={item.date}
              price={item.price}
              space={12}
              keyExtractor={item => item.id}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text.default,
  },
  space(height) {
    return {
      height,
    };
  },
  contList: {
    flex: 1,
    marginTop: 15,
  },
});
export default History;
