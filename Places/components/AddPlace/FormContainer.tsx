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
import fonts from '../../assets/styles/fonts';

function FormContainer({ image }) {
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [formTags, setFormTags] = useState([]);

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
      tag_list: formTags,
    };

    // console.log('TAGS FROM FORM ==> ', objToSend.tag_list);
    console.log('OBJECT TO BE SENT ==> ', objToSend);
    const result = await ApiService.addPlace(
      objToSend,
      refreshToken,
      accessToken
    );

    console.log('RESPONSE FROM SERVER', result);
  };

  return (
    <View style={styles.formContainer}>

      <View style={styles.placeNameInputContainer}> 
        <Text style={styles.inputLabelText} >Place name</Text>
        <Controller control={control} rules={{ maxLength: 100, required: true, }} name="name" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.placeNameInput}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
                autoCapitalize="none"
              />
          )}
        />
      </View>

      {/* <View style={styles.googleInputFieldsContainer}> */}
      <View style={styles.cityInputContainer}>
        <Text style={styles.inputLabelText} >Choose a city</Text>
        <CityInput setCity={setCity} setCountry={setCountry} />
      </View>

      <View style={styles.addressInputContainer}>
        <Text style={styles.inputLabelText} >Enter the address</Text>
        <AddressInput address={address} setAddress={setAddress} country={country} />
      </View>

      {/* </View> */}
      <View style={styles.descriptionInputContainer}>
        <Text style={styles.inputLabelText} >Describe your experience</Text>
        <Controller control={control} rules={{maxLength: 100, required: true,}} name="description" defaultValue=""
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
            />
      </View>

      <TagsContainer formTags={formTags} setFormTags={setFormTags} />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitLabel}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.backgroundDark,
    height: 520,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  placeNameInputContainer: {
    height: '16%',
    width: '100%',
  },

  cityInputContainer: {
    height: '16%',
    width: '100%', 
    zIndex: 5, 
  },

  addressInputContainer: {
    height: '16%',
    width: '100%',
    zIndex: 3,
  },

  descriptionInputContainer: {
    height: '25%',
    width: '100%',
  },

  inputLabelText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.fontLight,
    marginBottom: 2,
    marginTop: 3
  },

  placeNameInput: {
    backgroundColor: colors.formInputBackgroundLight,
    height: '50%',
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: fonts.regular,
    fontSize: 14
  },

  googleInputFieldsContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'space-evenly',
    zIndex: 3,
  },

  placeDescription: {
    backgroundColor: colors.formInputBackgroundLight,
    height: '70%',
    padding: 10,
    borderRadius: 5,
    fontFamily: fonts.regular,
    fontSize: 14,
    paddingTop: 10,
  },

  submitButton: {
    height: 45,
    width: 90,
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1
  },

  submitLabel: {
    fontFamily: fonts.semiBold,
    color: colors.fontDark
  }
});

export default FormContainer;
