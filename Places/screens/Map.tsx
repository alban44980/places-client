//@ts-nocheck

import React, { useState, useEffect } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import CityInput from '../components/AddPlace/CityInput';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import colors from '../assets/styles/colors';
import * as Location from 'expo-location';

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<String>('');
  const [inputValue, setInputValue] = useState<String>('');
  const [cityCoords, setCityCoords] = useState<any>();
  const [country, setCountry] = useState<String>('');
  const [markerlist, setMarkerlist] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log('YOUR LOCATION IS ==> ', location);
      setLocation({
        coords: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    })();

    //below set the markers list
  }, []);

  useEffect(() => {
    console.log('CITY VALUE HAS CHANGED !!!!!');
    (async () => {
      const cityGeoCall = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${inputValue}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const cityGeo = await cityGeoCall.json();
      // console.log('coordinates of newCity ==>', cityGeo);
      console.log(
        'EXACT CORDINATES  ==> ',
        JSON.stringify(cityGeo.results[0].geometry.location)
      );
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
    console.log(location);
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
              // latitude: 41.3874,
              // longitude: 2.1686,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          >
            <Marker coordinate={{ latitude: 41.4036, longitude: 2.1744 }} />
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
    backgroundColor: colors.backgroundDark,
    flexGrow: 1,
  },
  map: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height / 1.3,
  },
});

export default Map;
