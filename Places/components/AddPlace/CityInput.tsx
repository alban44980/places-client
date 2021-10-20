//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../../assets/styles/colors';
import Description from './Description';
import fonts from '../../assets/styles/fonts';





const CityInput = ({
  setCity,
  setCountry,
  cityCoords,
  setCityCoords,
  setInputValue,
}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="City"
      onPress={(data, details = null) => {
        if (setCity) setCity(data.terms[0].value);
        if (setInputValue) setInputValue(data.description);
        if (setCountry) setCountry(data.terms[data.terms.length - 1].value);
      }}
      query={{
        key: REACT_APP_GOOGLE_MAPS_API_KEY,
        language: 'en',
        // components: 'country:us',
        types: ['(cities)'],
      }}
      styles={{
        textInputContainer: {backgroundColor: colors.backgroundDark, width: '100%', height: 40},
        container: {  flex: 1, zIndex: 5},
        listView: {borderWidth: 2, zIndex: 10, position: 'absolute', top: 50},
        row: {flex: 1, alignItems: 'center', },
        description: {color: colors.fontDark, fontSize: 12, fontFamily: fonts.medium},
    
      }}
    />
  );
};

export default CityInput;
