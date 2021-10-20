//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const AddressInput = ({ setAddress, country }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Address"
      onPress={(data, details = null) => {
        setAddress(data.description);
      }}
      query={{
        key: REACT_APP_GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      styles={{
        container: {  flex: 1, zIndex: 5, height: 100, },
        textInputContainer: { width: '100%', flex: 1,},
        textInput: {fontFamily: fonts.regular, fontSize: 14},
        listView: {borderWidth: 1, zIndex: 10, position: 'absolute', top: 50, height: 200 },
        row: {flex: 1, alignItems: 'center' },
        description: {color: colors.fontDark, fontSize: 14, fontFamily: fonts.regular},
      }}
    />
  );
};

export default AddressInput;


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.backgroundLight
  },
  
})