import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {colors} from '../../utils';
import {Bmenu, Bprofile} from '../../components';
import {SearchInput} from '../../components';
import {MenuFood, CardSection} from './components';

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    navigation.navigate('Search');
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.btnHeader}>
        <Bmenu />
        <Bprofile />
      </View>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Belanja Menjadi Mudah</Text>
      </View>
      <View style={styles.boxSearch}>
        <SearchInput
          placeholder="Cari yang dibutuhkan"
          onPress={handleSearch}
          onChangeText={e => setSearch()}
        />
      </View>
      <MenuFood />
      <View style={styles.space(20)} />
      <CardSection />
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  boxTitle: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: colors.text.title,
  },
  boxSearch: {
    paddingHorizontal: 15,
    marginTop: 18,
    marginBottom: 34,
  },
  space: height => {
    return {
      height,
    };
  },
});
export default Home;
