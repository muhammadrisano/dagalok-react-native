import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Card} from '../../../components';

const CardSection = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal={true} style={styles.wrapScroll}>
        <Card
          img="https://cdn1-production-images-kly.akamaized.net/gL80losSTvkHiGwkVpCNF1AXy4Y=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2414735/original/007711700_1542873511-shutterstock_475319266.jpg"
          title="Sayur Bayam"
          price="100.000"
          satuan="Kg"
          from="Pasar Raya"
        />
        <View style={styles.space(25)} />
        <Card
          img="https://cdn1-production-images-kly.akamaized.net/gL80losSTvkHiGwkVpCNF1AXy4Y=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2414735/original/007711700_1542873511-shutterstock_475319266.jpg"
          title="Sayur Bayam"
          price="100.000"
          satuan="Kg"
          from="Pasar Raya"
        />
        <View style={styles.space(25)} />
        <Card
          img="https://cdn1-production-images-kly.akamaized.net/gL80losSTvkHiGwkVpCNF1AXy4Y=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2414735/original/007711700_1542873511-shutterstock_475319266.jpg"
          title="Sayur Bayam"
          price="100.000"
          satuan="Kg"
          from="Pasar Raya"
        />
        <View style={styles.space(25)} />
        <Card
          img="https://cdn1-production-images-kly.akamaized.net/gL80losSTvkHiGwkVpCNF1AXy4Y=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2414735/original/007711700_1542873511-shutterstock_475319266.jpg"
          title="Sayur Bayam"
          price="100.000"
          satuan="Kg"
          from="Pasar Raya"
        />
        <View style={styles.space(25)} />
        <Card
          img="https://cdn1-production-images-kly.akamaized.net/gL80losSTvkHiGwkVpCNF1AXy4Y=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2414735/original/007711700_1542873511-shutterstock_475319266.jpg"
          title="Sayur Bayam"
          price="100.000"
          satuan="Kg"
          from="Pasar Raya"
        />
      </ScrollView>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  wrapScroll: {
    paddingLeft: 15,
  },
  space(value) {
    return {
      marginRight: value,
    };
  },
});
