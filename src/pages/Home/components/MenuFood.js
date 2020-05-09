import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../../utils';
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
  contMenu: {
    width: 120,
    height: 35,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gDefault,
    marginLeft: 15,
    elevation: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: colors.text.default,
    fontSize: 16,
  },
  imgMenu: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: 5,
  },
});
