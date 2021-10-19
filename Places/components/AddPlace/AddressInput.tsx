//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../../assets/styles/colors';

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
        // components: 'country:us',
        // types: ['(establishments)'],
      }}
      style={{

        listView: {
          backgroundColor: colors.backgroundDark,
          width: 100
        }



      }}
      // styles={{
      //   container: {
      //     // backgroundColor: 'red',
      //   },
      //   textInputContainer: {
      //     // backgroundColor: 'grey',
      //     width: '100%',
      //   },
      // }}
    />
  );
};

export default AddressInput;


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.backgroundLight
  },
  
})