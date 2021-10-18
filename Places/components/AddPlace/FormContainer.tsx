//@ts-nocheck
import React, { useEffect, useState } from 'react';

import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import colors from '../../assets/styles/colors';
import { useForm, Controller } from 'react-hook-form';
import TagsContainer from './tagsContainer';
import CityInput from './CityInput';
import AddressInput from './AddressInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ApiService from '../../ApiService';
import { useSelector } from 'react-redux';

function FormContainer({ image }) {
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [tags, setTags] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submit form function
  const onSubmit = async (data: any) => {
    const cityGeoCall = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const cityGeo = await cityGeoCall.json();
    const addressGeoCall = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const addressGeo = await addressGeoCall.json();

    const objToSend = {
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
      img: image,
      tag_list: [{ tag_name: 'Bar' }, { tag_name: 'Sport' }],
    };

    const result = await ApiService.addPlace(
      objToSend,
      refreshToken,
      accessToken
    );
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

      <AddressInput
        address={address}
        setAddress={setAddress}
        country={country}
      />

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
      <TouchableOpacity
        style={styles.submitButton}
        title="Add Place"
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>addplace</Text>
      </TouchableOpacity>
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
    height: '10%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    margin: 5,
    height: '10%',
    width: '100%',
    padding: 10,
    borderRadius: 5,
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
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: 'purple',
    color: 'green',
    height: 30,
    width: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default FormContainer;
