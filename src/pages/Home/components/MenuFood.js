import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../../utils';
import {MenuSayur} from '../../../assets/Image/menuImage';

const Menufood = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal={true}>
        <View style={styles.contMenu}>
          <Image source={MenuSayur} style={styles.imgMenu} />
          <Text style={styles.text}>Sayur</Text>
        </View>
        <View style={styles.contMenu}>
          <Image source={MenuSayur} style={styles.imgMenu} />
          <Text style={styles.text}>Buah</Text>
        </View>
        <View style={styles.contMenu}>
          <Image source={MenuSayur} style={styles.imgMenu} />
          <Text style={styles.text}>Ikan</Text>
        </View>
        <View style={styles.contMenu}>
          <Image source={MenuSayur} style={styles.imgMenu} />
          <Text style={styles.text}>Sayur</Text>
        </View>
        <View style={styles.contMenu}>
          <Image source={MenuSayur} style={styles.imgMenu} />
          <Text style={styles.text}>Sayur</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Menufood;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
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
