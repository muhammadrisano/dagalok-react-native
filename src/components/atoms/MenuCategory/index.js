import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MenuCategory = ({title, icon}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome5 name={icon} size={34} color="#fff" />
      </View>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  container: {
    height: 92,
    width: 92,
    borderRadius: 92 / 2,
    backgroundColor: colors.gGrey,
    marginBottom: 3,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    marginBottom: 18,
    width: 92,
    overflow: 'hidden',
  },
  textTitle: {
    fontSize: 14,
    color: colors.text.default,
  },
});
