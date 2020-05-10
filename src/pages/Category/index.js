import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchInput} from '../../components';
import {colors} from '../../utils';
import {MenuCategory} from '../../components/atoms';
import {ScrollView} from 'react-native-gesture-handler';

const index = () => {
  return (
    <View style={styles.wrapper}>
      <SearchInput placeholder="Cari yang kamu inginkan.." />
      <View style={styles.space(15)} />
      <Text style={styles.textTitle}>Halaman Category</Text>
      <View style={styles.space(20)} />
      <ScrollView>
        <View style={styles.wrapCategory}>
          <MenuCategory title="Ikan" icon="fish" />
          <MenuCategory title="Buah" icon="apple-alt" />
          <MenuCategory title="Sayur" icon="seedling" />
          <MenuCategory title="Umbi-umbian" icon="carrot" />
          <MenuCategory title="Cabe" icon="pepper-hot" />
          <MenuCategory title="Unggas" icon="drumstick-bite" />
          <MenuCategory title="Rempah" icon="mortar-pestle" />
          <MenuCategory title="Cepat Saji" icon="utensils" />
          <MenuCategory title="Kacang" icon="nutritionix" />
          <MenuCategory title="Rempah-rempah" icon="mortar-pestle" />
          <MenuCategory title="Cepat Saji" icon="utensils" />
          <MenuCategory title="Kacang" icon="nutritionix" />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 15,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.default,
  },
  space(height) {
    return {
      height,
    };
  },
  wrapCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
