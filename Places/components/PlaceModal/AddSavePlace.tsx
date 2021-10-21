import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import { PlaceSchema, TagSchema } from '../../Interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import ApiService from '../../ApiService';

function AddSavePlace(props: any) {
  const { placeToSave } = props;

  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );

  const [pressed, setPressed] = useState<Boolean>(false);

  async function handlePress() {
    try {
      setPressed(!pressed);
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
    <TouchableHighlight
      onPress={() => handlePress()}
      style={pressed ? styles.buttonSelected : styles.buttonNotSelected}
    >
      <Text style={pressed ? styles.labelSelected : styles.labelNotSelected}>
        Save Place
      </Text>
    </TouchableHighlight>
  );
}

export default AddSavePlace;

const styles = StyleSheet.create({
  labelNotSelected: {
    fontSize: 13,
    fontFamily: fonts.medium,
    letterSpacing: 0.8,
  },

  labelSelected: {
    fontSize: 13,
    fontFamily: fonts.medium,
    letterSpacing: 0.8,
    color: colors.fontLight,
  },

  buttonSelected: {
    backgroundColor: colors.buttonDefault,
    width: '40%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    position: 'absolute',
    bottom: 60,
  },

  buttonNotSelected: {
    backgroundColor: 'transparent',
    width: '40%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    position: 'absolute',
    bottom: 60,
  },
});
