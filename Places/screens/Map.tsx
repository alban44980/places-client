//@ts-nocheck

import React, { useState, useEffect } from 'react';
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
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.785834,
          longitude: -122.406417,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <View style={styles.searchContainer}>
          <CityInput setCity={setCity} setCountry={setCountry} />
        </View>
        <Marker coordinate={{ latitude: 41.4036, longitude: 2.1744 }} />
      </MapView>

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
