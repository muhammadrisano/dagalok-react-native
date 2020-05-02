import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {BgLogin} from '../../assets';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from '../../components';

const Login = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        barStyle="white-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <KeyboardAvoidingView style={styles.wrapper}>
        <ImageBackground source={BgLogin} style={styles.bgImage}>
          <View style={styles.posTop}>
            <Text style={styles.title}>Selamat Datang Gadalok</Text>
          </View>
          <View style={styles.posBottom}>
            <Text style={styles.textLogin}>Silahkan Login</Text>
            <View style={styles.formInput}>
              <TextInput placeholder="No Handphone" style={styles.inputText} />
              <View style={styles.space(10)} />
              <TextInput placeholder="Password" style={styles.inputText} />
              <View style={styles.space(25)} />
              <Button title="Masuk" />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  posTop: {
    height: '51%',
    padding: 15,
  },
  posBottom: {
    paddingTop: 17,
    flex: 1,
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
  },
  formInput: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 20,
  },
  textLogin: {
    fontSize: 26,
    marginLeft: 30,
  },
  inputText: {
    borderColor: '#FE724C',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  space: value => {
    return {
      height: value,
    };
  },
});
