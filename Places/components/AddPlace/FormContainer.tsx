//@ts-nocheck
import React, { useState } from "react";

import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";

import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import colors from "../../assets/styles/colors";
import { useForm, Controller } from "react-hook-form";
import TagsContainer from "./tagsContainer";
import CityInput from "./CityInput";
import AddressInput from "./AddressInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import ApiService from "../../ApiService";
import { useSelector } from "react-redux";
import fonts from "../../assets/styles/fonts";

function FormContainer({ image }) {
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );

  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [formTags, setFormTags] = useState<any>([]);

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
    console.log("adress Geo ==>>>, ", addressGeo);

    let tag_list = [];
    for (let aTag of formTags) {
      tag_list.push({ tag_name: aTag });
    }

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
      tag_list: tag_list,
    };

    console.log("OBJECT TO BE SENT ==> ", objToSend);
    const result = await ApiService.addPlace(
      objToSend,
      refreshToken,
      accessToken
    );

    console.log("RESPONSE FROM SERVER", result);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.placeNameInputContainer}>
        <Text style={styles.inputLabelText}>Place name</Text>
        <Controller
          control={control}
          rules={{ maxLength: 100, required: true }}
          name="name"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
<<<<<<< HEAD
            <TextInput
              style={styles.placeNameInput}
              onChangeText={onChange}
              value={value}
              placeholder="Place name"
              autoCapitalize="none"
            />
=======
              <TextInput
                style={styles.placeNameInput}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
                autoCapitalize="none"
              />
>>>>>>> origin/keyboardAvoiding
          )}
        />
      </View>

      {/* <View style={styles.googleInputFieldsContainer}> */}
      <View style={styles.cityInputContainer}>
        <Text style={styles.inputLabelText}>Choose a city</Text>
        <CityInput setCity={setCity} setCountry={setCountry} />
      </View>

      <View style={styles.addressInputContainer}>
        <Text style={styles.inputLabelText}>Enter the address</Text>
        <AddressInput
          address={address}
          setAddress={setAddress}
          country={country}
        />
      </View>

      {/* </View> */}
      <View style={styles.descriptionInputContainer}>
        <Text style={styles.inputLabelText}>Describe your experience</Text>
        <Controller
          control={control}
          rules={{ maxLength: 100, required: true }}
          name="description"
          defaultValue=""
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
<<<<<<< HEAD
        <Text style={{ color: "white", fontSize: 20 }}>addplace</Text>
=======
        <Text style={styles.submitLabel}>Submit</Text>
>>>>>>> origin/keyboardAvoiding
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.backgroundDark,
<<<<<<< HEAD
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
  },

  placeNameInputContainer: {
    width: "100%",
    height: "20%",
    borderWidth: 1,
    justifyContent: "center",
  },

  cityInputContainer: {
    width: "100%",
    zIndex: 5,
    backgroundColor: "gray",
    height: "20%",
    borderWidth: 1,
  },

  addressInputContainer: {
    width: "100%",
    height: "20%",
=======
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
>>>>>>> origin/keyboardAvoiding
    zIndex: 3,
  },

  descriptionInputContainer: {
<<<<<<< HEAD
    width: "100%",
    height: "40%",
    borderWidth: 1,
    justifyContent: "center",
=======
    height: '25%',
    width: '100%',
>>>>>>> origin/keyboardAvoiding
  },

  inputLabelText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.fontLight,
    marginBottom: 2,
    marginTop: 3
  },

  placeNameInput: {
<<<<<<< HEAD
    backgroundColor: colors.backgroundLight,
    height: "50%",
    width: "100%",
=======
    backgroundColor: colors.formInputBackgroundLight,
    height: '50%',
    width: '100%',
>>>>>>> origin/keyboardAvoiding
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: fonts.regular,
    fontSize: 14
  },

  googleInputFieldsContainer: {
<<<<<<< HEAD
    height: "40%",
    width: "100%",
    justifyContent: "space-evenly",
    zIndex: 3,
    borderWidth: 2,
  },

  addButton: {
    margin: 5,
  },

  placeDescription: {
    backgroundColor: "white",
    margin: 5,
    height: "70%",
    width: "85%",
=======
    height: '30%',
    width: '100%',
    justifyContent: 'space-evenly',
    zIndex: 3,
  },

  placeDescription: {
    backgroundColor: colors.formInputBackgroundLight,
    height: '70%',
>>>>>>> origin/keyboardAvoiding
    padding: 10,
    borderRadius: 5,
    fontFamily: fonts.regular,
    fontSize: 14,
    paddingTop: 10,
  },

  submitButton: {
<<<<<<< HEAD
    backgroundColor: "purple",
    color: "green",
    height: 30,
    width: 100,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
=======
    height: 45,
    width: 90,
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1
>>>>>>> origin/keyboardAvoiding
  },

  submitLabel: {
    fontFamily: fonts.semiBold,
    color: colors.fontDark
  }
});

export default FormContainer;
