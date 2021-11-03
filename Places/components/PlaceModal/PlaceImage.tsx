import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';

function PlaceImage(props: any) {
  const { place } = props;
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: place.img }} style={styles.imageStyle} />
    </View>
  );
}

export default PlaceImage;

const styles = StyleSheet.create({
  imageContainer: {
    height: '68%',
    width: '90%',
    marginTop: 10,
    marginBottom: 15,
  },

  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.backgroundLight,
  },
});
