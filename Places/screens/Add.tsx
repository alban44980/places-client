import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import colors from '../assets/styles/colors';
import ImageContainer from '../components/AddPlace/ImageContainer';
import FormContainer from '../components/AddPlace/FormContainer';
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';

function Add() {
  const [image, setImage] = useState<any>(null);

  return (
    <SafeAreaView style={styles.addPageContainer}>
      <ImageContainer image={image} setImage={setImage} />
      <KeyboardAvoidWrap>
        <FormContainer image={image} setImage={setImage} />
      </KeyboardAvoidWrap>
    </SafeAreaView>
  );
}

export default Add;

const styles = StyleSheet.create({
  addPageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
  },
});
