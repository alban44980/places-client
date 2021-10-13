import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Details from '../components/AddPlace/Details';
import ImageSelector from '../components/AddPlace/ImageSelector';
import LocationInfo from '../components/AddPlace/LocationInfo';
import Description from '../components/AddPlace/Description';



function Add() {
  return (
    <View style={styles.container}>
      <ImageSelector />
      <Details />
      <LocationInfo />
      <Description />

    </View>
  );
}

export default Add;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingTop: 60,
  }
  
})