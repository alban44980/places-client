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
import MapView, { Marker } from 'react-native-maps';
import colors from '../assets/styles/colors';
import * as Location from 'expo-location';

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<String>('');
  const [city, setCity] = useState<String>('');
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
      setLocation(location);
    })();

    //below set the markers list
  }, []);

  useEffect(() => {
    console.log('CITY VALUE HAS CHANGED !!!!!');
    (async () => {
      const cityGeoCall = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
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
  }, [city]);

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
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location ? location.coords.latitude : 41.3874,
            longitude: location ? location.coords.longitude : 2.1686,
            // latitude: 41.3874,
            // longitude: 2.1686,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <View style={styles.searchContainer}>
            <CityInput
              setCity={setCity}
              setCountry={setCountry}
              cityCoords={cityCoords}
              setCityCoords={setCityCoords}
            />
          </View>
        </MapView>
      ) : (
        <Text>LOADING BRUV</Text>
      )}

      <View style={styles.mapContainer}></View>
      <View style={styles.previewContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
