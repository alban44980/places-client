//@ts-nocheck

import React, { useState, useEffect } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import CityInput from '../components/AddPlace/CityInput';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import colors from '../assets/styles/colors';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';
import places from '../dummyData/placesList';

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<String>('');
  const [inputValue, setInputValue] = useState<String>('');
  const [cityCoords, setCityCoords] = useState<any>();
  const [country, setCountry] = useState<String>('');
  const [markerlist, setMarkerlist] = useState<any[]>([]);
  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );
  const [placesToShow, setPlacesToShow] = useState<any[]>([]);

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
    for (let place of placesList) {
      coordsList.push(makeItAnObject(place.location));
    }
    return coordsList;
  }

  //Helper function
  function makeItAnObject(input) {
    const str1 = input.split(':')[1].split(',')[0];
    const str2 = input.split(':')[2].split('}')[0];
    const obj = {
      lat: str1,
      lng: str2,
    };
    return obj;
  }

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: location ? location.coords.lat : 41.3874,
              longitude: location ? location.coords.lng : 2.1686,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          >
            {placesToShow
              ? placesToShow.map((place) => {
                  return (
                    <Marker
                      coordinate={{
                        latitude: Number(place.lat),
                        longitude: Number(place.lng),
                      }}
                    />
                  ); //>
                })
              : null}
          </MapView>
        </View>
      ) : (
        <Text>LOADING BRUV</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    // position: 'absolute',
    width: '100%',
    height: '15%',
    paddingTop: 35,
  },
  mapContainer: {
    // backgroundColor: 'red',
    height: '60%',
  },
  previewContainer: {
    backgroundColor: colors.backgroundLight,
    flexGrow: 1,
  },
  map: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height / 1.3,
  },
});

export default Map;
