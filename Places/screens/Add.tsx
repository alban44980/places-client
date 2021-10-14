import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import Details from '../components/AddPlace/Details';
import ImageSelector from '../components/AddPlace/ImageSelector';
import LocationInfo from '../components/AddPlace/LocationInfo';
import Description from '../components/AddPlace/Description';
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';



function Add() {
  return (
    <View style={{flex:1, alignItems: 'center', paddingTop: 60}}>
  
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
  },

  innerContainer: {
    flex: 1,
    width: '100%',
  },

  scrollContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',

  }
  
})