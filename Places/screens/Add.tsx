import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableHighlight,
  Image,
} from 'react-native';
import colors from '../assets/styles/colors';
import ImageContainer from '../components/AddPlace/ImageContainer';
import FormContainer from '../components/AddPlace/FormContainer';

// import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';

function Add() {
  return (
    <View style={styles.addPageContainer}>
      <ImageContainer />
      <FormContainer />
    </View>
  );
}

export default Add;

const styles = StyleSheet.create({
  addPageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    // paddingTop: 60,
  },

  // innerContainer: {
  //   flex: 1,
  //   width: '100%',
  // },

  // scrollContainer: {
  //   alignItems: 'center',
  //   flex: 1,
  //   width: '100%',

  // }
});

//what we need
