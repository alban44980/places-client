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

function FormContainer({ image, setImage }) {
  const [nameInput, setNameInput] = useState<string>("");
  const [cityInput, setCityInput] = useState<string>("");
  const [addressInput, setAddressInput] = useState<string>("");
  const [describeInput, setDescribeInput] = useState<string>("");
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
    if (!image) {
      alert("OH NOR IMAGE IS STILL LOADING");
      return;
    }
    const cityGeoCall = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const cityGeo = await cityGeoCall.json();
    const addressGeoCall = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const addressGeo = await addressGeoCall.json();

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

    const result = await ApiService.addPlace(
      objToSend,
      refreshToken,
      accessToken
    );
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
            <TextInput
              style={styles.placeNameInput}
              onChangeText={onChange}
              value={nameInput}
              placeholder="Name"
              autoCapitalize="none"
              onChangeText={(text) => {
                setNameInput(text);
              }}
              value={nameInput}
            />
          )}
        />
      </View>

      {/* <View style={styles.googleInputFieldsContainer}> */}
      <View style={styles.cityInputContainer}>
        <Text style={styles.inputLabelText}>Choose a city</Text>
        <CityInput
          setCity={setCity}
          setCountry={setCountry}
          value={cityInput}
        />
      </View>

      <View style={styles.addressInputContainer}>
        <Text style={styles.inputLabelText}>Enter the address</Text>
        <AddressInput
          address={address}
          setAddress={setAddress}
          country={country}
          value={addressInput}
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
              onChangeText={(text) => {
                setDescribeInput(text);
              }}
              value={describeInput}
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
        onPress={() => {
          handleSubmit(onSubmit);
          setNameInput("");
          setCityInput("");
          setAddressInput("");
          setDescribeInput("");
        }}
      >
        <Text style={styles.submitLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.backgroundLight,
    height: 520,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  placeNameInputContainer: {
    height: "16%",
    width: "100%",
  },

  cityInputContainer: {
    height: "16%",
    width: "100%",
    zIndex: 5,
  },

  addressInputContainer: {
    height: "16%",
    width: "100%",
    zIndex: 3,
  },

  descriptionInputContainer: {
    height: "25%",
    width: "100%",
  },

  inputLabelText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.fontDark,
    marginBottom: 2,
    marginTop: 3,
  },

  placeNameInput: {
    backgroundColor: colors.formInputBackgroundLight,
    height: "50%",
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: fonts.regular,
    fontSize: 14,
    borderWidth: 0.5,
  },

  googleInputFieldsContainer: {
    height: "30%",
    width: "100%",
    justifyContent: "space-evenly",
    zIndex: 3,
  },

  placeDescription: {
    backgroundColor: colors.formInputBackgroundLight,
    height: "70%",
    padding: 10,
    borderRadius: 5,
    fontFamily: fonts.regular,
    fontSize: 14,
    paddingTop: 10,
    borderWidth: 0.5,
  },

  submitButton: {
    height: 45,
    width: 90,
    backgroundColor: colors.buttonDefault,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
  },

  submitLabel: {
    fontFamily: fonts.semiBold,
    color: colors.fontLight,
  },
});

export default FormContainer;
