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
        textInputContainer: {backgroundColor: colors.backgroundDark, width: '100%', height: 40},
        container: {  flex: 1, height: 150, zIndex: 5},
        listView: {borderWidth: 2, zIndex: 10, position: 'absolute', top: 50},
        row: {flex: 1, alignItems: 'center', },
        description: {color: colors.fontDark, fontSize: 12, fontFamily: fonts.medium},
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