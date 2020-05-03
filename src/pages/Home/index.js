import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {colors} from '../../utils';
import {Bmenu, Bprofile} from '../../components';
import {SearchInput} from '../../components';
import {MenuFood} from './components';

const Home = () => {
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    Alert.alert(search);
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
          onChangeText={e => setSearch(e)}
        />
      </View>
      <MenuFood />
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
});
export default Home;
