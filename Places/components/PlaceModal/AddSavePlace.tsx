import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../../assets/styles/colors";
import fonts from "../../assets/styles/fonts";
import { PlaceSchema, TagSchema } from "../../Interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";
import ApiService from "../../ApiService";

function AddSavePlace(props: any) {
  const { placeToSave } = props;
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );

  async function handlePress() {
    try {
      if (placeToSave) {
        const formatedPlace: PlaceSchema = formatPlace(placeToSave);

        await ApiService.addSavedPlace(
          formatedPlace,
          refreshToken,
          accessToken
        );
      } else {
        await ApiService.getSavedPlaces(refreshToken, accessToken);
      }
    } catch (e: any) {}
  }

  function formatPlace(place: any): PlaceSchema {
    const name: string = place.name;
    const description: string = place.description;
    const location: string = place.location;
    const address: string = place.address;
    const city: string = place.city;
    const country: string = place.country;
    const img: string = place.img;
    const tag_list: TagSchema[] = [];

    for (let tag of place.Tags) {
      tag_list.push({ tag_name: tag.Places_Tag_Junction.TagName });
    }

    const savedPlace: PlaceSchema = {
      name,
      description,
      location,
      address,
      city,
      country,
      img,
      tag_list,
    };

    return savedPlace;
  }

  return (
    <TouchableHighlight onPress={() => handlePress()} style={styles.saveButton}>
      <Text style={styles.saveButtonText}>Add Save Place</Text>
    </TouchableHighlight>
  );
}

export default AddSavePlace;

const styles = StyleSheet.create({
  saveButton: {
    height: "5%",
    width: "22%",
    backgroundColor: colors.backgroundDark,
    borderColor: colors.backgroundLight,
    borderStyle: "solid",
    borderWidth: 0.5,
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 60,
    left: "40%",
    zIndex: 2,
  },

  saveButtonText: {
    color: colors.fontLight,
    fontFamily: fonts.light,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
