//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import { StyleSheet, View, TextInput, Button } from 'react-native';
import colors from '../../assets/styles/colors';
import { useForm, Controller } from 'react-hook-form';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from 'react-native-gesture-handler';
import TagsContainer from './tagsContainer';

const CityInput = ({ setCity, setCountry }) => {
  // const apiKey: any = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  // console.log(apiKey);
  return (
    <GooglePlacesAutocomplete
      placeholder="City"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setCity(data.terms[0].value);
        setCountry(data.terms[data.terms.length - 1].value);
        // console.log('Country ==>', data.terms[data.terms.length - 1].value);
        // console.log('DETAILS ==>', details.types);
      }}
      query={{
        key: REACT_APP_GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer: {
          backgroundColor: 'grey',
          width: '100%',
        },
        container: {
          height: 100,
        },
        row: {},
      }}
    />
  );
};
const AddressInput = ({ setAddress }) => {
  // const apiKey: any = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <GooglePlacesAutocomplete
      placeholder="Address"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
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
          backgroundColor: 'grey',
          width: '100%',
        },
      }}
    />
  );
};

function FormContainer() {
  const initialState = {
    name: '',
    description: '',
    tag_list: [],
    img: '',
    location: '',
    address: '',
    city: '',
    city_info: null,
    country: '',
  };
  const [state, setState] = useState(initialState);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [tags, setTags] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(state);

  const onSubmit = async (data: any) => {
    console.log('DATA FROM FORM => ', data);
    console.log('city  state ==>', city);
    console.log('country ==>', country);
    console.log('address ==>', address);
    const cityGeoCall = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const cityGeo = await cityGeoCall.json();
    console.log('cityGeo ==>', cityGeo.results[0].geometry.location);
    const addressGeoCall = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const addressGeo = await addressGeoCall.json();
    console.log('addressGeo ==>', addressGeo.results[0].geometry.location);
    setState((previous) => ({
      ...previous,
      name: data.name,
      description: data.description,
      location: JSON.stringify(addressGeo.results[0].geometry.location),
      address: address,
      city: city,
      city_info: {
        name: city,
        country: country,
        location: JSON.stringify(cityGeo.results[0].geometry.location),
      },
      country: country,
    }));

    setTimeout(() => {
      console.log('ENTIRE STATE CONSOLE LOGGED BRUV YIIIII ==>', state);
    }, 2000);

    //   .then((res) => res.json())
    //   .then((data) => {
    //     let coords = data.results[0].geometry.location;
    //     console.log('COORDINATES FROM GEOCALL BRU: ', coords);
    //   });
  };

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Place name"
            autoCapitalize="none"
          />
        )}
        name="name"
        defaultValue=""
      />
      <CityInput setCity={setCity} setCountry={setCountry} />

      {/* <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.googleInputsContainer}>
            <CityInput />
          </View>
        )}
        name="city"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.googleInputsContainer}>
            <AddressInput />
          </View>
        )}
        name="address"
        defaultValue=""
      /> */}
      <AddressInput address={address} setAddress={setAddress} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.placeDescription}
            onChangeText={onChange}
            value={value}
            placeholder="Description"
            autoCapitalize="none"
            multiline={true}
            numberOfLines={5}
          />
        )}
        name="description"
        defaultValue=""
      />
      <TagsContainer />
      <Button title="Add Place" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'lightblue',
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },
  googleInputsContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    margin: 5,
    height: '10%',
    width: '100%',
    padding: 10,
  },
  addButton: {
    margin: 5,
  },
  placeDescription: {
    backgroundColor: 'white',
    margin: 5,
    height: '30%',
    width: '85%',
    padding: 10,
  },
});

export default FormContainer;

// {
//     "name": "Pandy's",
//     "description" :"great place for drinks",
//     "tag_list": [{"tag_name": "bars"},{"tag_name": "music"}],
//     "img": "https://13144adksfjhafakjfhjkhfa.com",
//     "location": "{lat:131313,lng:1313134}",
//     "address": "134avc 53st, barc, MW, 33193",
//     "city":"Lagos",
//     "city_info": {"name":"Lagos","country":"Japan","location":"{lat:131313,lng:1313134}"},
//     "country": "Japan"
// }
