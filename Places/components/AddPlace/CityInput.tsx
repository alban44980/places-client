//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const CityInput = ({ setCity, setCountry, cityCoords, setCityCoords }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="City"
      onPress={(data, details = null) => {
        console.log('DATA FROM SEARCH  INPUT', data);
        setCity(data.terms[0].value);
        if (setCountry) setCountry(data.terms[data.terms.length - 1].value);
      }}
      query={{
        key: REACT_APP_GOOGLE_MAPS_API_KEY,
        language: 'en',
        // components: 'country:us',
        types: ['(cities)'],
      }}
      styles={{
        textInputContainer: {
          // backgroundColor: 'grey',
          width: '100%',
        },
        container: {
          // backgroundColor: 'yellow',
          // height: 10,
        },
        // row: { backgroundColor: 'red' },
      }}
    />
  );
};

export default CityInput;
