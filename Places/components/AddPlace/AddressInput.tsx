//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressInput = ({ setAddress }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Address"
      onPress={(data, details = null) => {
        console.log(data.description);
        setAddress(data.description);
      }}
      query={{
        key: REACT_APP_GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      styles={{
        container: {
          // backgroundColor: 'red',
        },
        textInputContainer: {
          // backgroundColor: 'grey',
          width: '100%',
        },
      }}
    />
  );
};

export default AddressInput;
