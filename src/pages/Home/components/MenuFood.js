import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MenuSayur} from '../../../assets/Image/menuImage';
import {BKategori} from '../../../components';

const Menufood = () => {
  return (
    <View style={styles.wrapper}>
      {/* kategori menu */}
      <ScrollView horizontal={true}>
        <BKategori img={MenuSayur} title="Sayur" />
        <BKategori img={MenuSayur} title="Sayur" />
        <BKategori img={MenuSayur} title="Sayur" />
        <BKategori img={MenuSayur} title="Sayur" />
      </ScrollView>
      {/* kategori item card */}
    </View>
  );
};

export default Menufood;

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    width: '100%',
  },
});
