//@ts-nocheck

import React, { useState, useEffect } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import CityInput from '../components/AddPlace/CityInput';
import colors from '../assets/styles/colors';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';
import PlaceModal from '../components/PlaceModal/PlaceModal';
import makeItAnObject from '../components/Map/helper';
import MapContainer from '../components/Map/MapContainer';
import Preview from '../components/Map/Preview';
import LottieView from 'lottie-react-native';

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<String>('');
  const [inputValue, setInputValue] = useState<String>('');
  const [cityCoords, setCityCoords] = useState<any>();
  const [country, setCountry] = useState<String>('');
  const [placeList, setPlaceList] = useState<any[]>([]);
  const [currentPlaceReview, setCurrentPlaceReview] = useState<any>(null);
  const [placeVisible, setPlaceVisible] = useState<Boolean>(false);

  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );
  const [placesToShow, setPlacesToShow] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        coords: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    })();
  }, []);

  useEffect(() => {
    const coordsList = getCityPlacesCoords(inputValue.split(',')[0]);
    setPlacesToShow(coordsList);
    (async () => {
      const cityGeoCall = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${inputValue}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const cityGeo = await cityGeoCall.json();

      setLocation({
        coords: cityGeo.results[0].geometry.location,
      });
    })();
  }, [inputValue]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function getCityPlacesCoords(input) {
    const friendCities = [];
    const placesList = [];
    const coordsList = [];
    for (let friend of userFriendInfo) {
      friendCities.push(...friend.Cities);
    }
    for (let city of friendCities) {
      if (city.name === input) {
        placesList.push(...city.Places);
      }
    }
    setPlaceList(placesList);
    for (let place of placesList) {
      coordsList.push(makeItAnObject(place.location));
    }
    return coordsList;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {placeVisible && (
        <PlaceModal
          setPlaceVisible={setPlaceVisible}
          placeVisible={placeVisible}
          place={currentPlaceReview}
        />
      )}
      {location ? (
        <View style={{ flex: 1 }}>
          <View style={styles.searchContainer}>
            <CityInput
              setInputValue={setInputValue}
              setCountry={setCountry}
              cityCoords={cityCoords}
              setCityCoords={setCityCoords}
            />
          </View>

          <View style={{ flex: 1, zIndex: 1 }}>
            <MapContainer
              placesToShow={placesToShow}
              location={location}
              placeList={placeList}
              setCurrentPlaceReview={setCurrentPlaceReview}
            />
          </View>
          <View style={styles.previewContainer}>
            {currentPlaceReview ? (
              <Preview
                currentPlaceReview={currentPlaceReview}
                setPlaceVisible={setPlaceVisible}
              />
            ) : (
              <View style={styles.beforeContainer}>
                <Text style={{ color: colors.fontLight }}>
                  Touch a place to preview !
                </Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <LottieView
            source={require('../assets/37178-travel.json')}
            style={styles.animation}
            autoPlay
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: '15%',
    paddingTop: 35,
    paddingHorizontal: '10%',
    zIndex: 2,
  },

  previewContainer: {
    backgroundColor: colors.backgroundDark,
    height: '30%',
  },

  beforeContainer: {
    backgroundColor: colors.backgroundDark,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
