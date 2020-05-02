import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {BgRegister} from '../../assets';
import Input from '../../components/atoms/Input/index';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '../../components';
import {colors, size} from '../../utils';

const Register = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <ImageBackground source={BgRegister} style={styles.bgImage}>
          <View style={styles.formRegister}>
            <Text style={styles.textTitle}>Halaman Register</Text>
            <View style={styles.contDaftar}>
              <Text style={styles.textPunyaAkun}>Sudah punya akun ?</Text>
              <Text style={styles.textDaftar}>Daftar</Text>
            </View>
            <View style={styles.formInput}>
              <View style={styles.space(12)} />
              <Input placeholder="Nomor Handphone" label="No Handphone" />
              <View style={styles.space(10)} />
              <Input placeholder="Nama Lengkap" label="Nama Lengkap" />
              <View style={styles.space(10)} />
              <Input placeholder="*****" label="Password" />
              <View style={styles.space(10)} />
              <Input placeholder="*****" label="Ulangi Password" />
              <View style={styles.space(23)} />
              <Button title="Daftar" />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bgImage: {
    height: size.height,
    resizeMode: 'cover',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: size.height * 0.08,
  },
  formRegister: {
    height: size.height * 0.85,
    backgroundColor: 'rgba(251,251,251,.9)',
    borderRadius: 25,
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textTitle: {
    fontSize: 26,
  },
  contDaftar: {
    flexDirection: 'row',
    marginTop: 7,
  },
  textPunyaAkun: {
    fontSize: 18,
    color: colors.aOrange,
  },
  textDaftar: {
    fontSize: 18,
    color: colors.aOrange,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  space: value => {
    return {
      height: value,
    };
  },
  formInput: {
    paddingLeft: 12,
    paddingRight: 12,
  },
});
