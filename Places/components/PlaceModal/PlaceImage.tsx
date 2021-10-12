import {StyleSheet, View, Text, Image} from 'react-native';

import React from 'react';

function PlaceImage(props: any) {
  const {place} = props
  return (
    <View style={styles.imageContainer}>
        <Image source={{uri: place.img}} style={styles.imageStyle}/>
    </View>
  );
}

export default PlaceImage;


const styles = StyleSheet.create({
  imageContainer: {
    height: '30%',
    width: '90%'
  },

  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    borderColor: 'black',
    borderWidth: 2
  },
})