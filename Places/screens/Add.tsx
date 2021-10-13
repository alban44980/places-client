import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import ImageSelector from '../components/AddPlace/ImageSelector';



function Add() {
  return (
    <View style={styles.container}>
      <ImageSelector />

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