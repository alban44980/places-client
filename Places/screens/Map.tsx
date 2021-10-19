import React, { useState } from 'react';
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

function Map() {
  const [city, setCity] = useState<String>('');
  const [country, setCountry] = useState<String>('');
  const [markerlist, setMarkerlist] = useState<any[]>([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.3874,
          longitude: 2.1686,
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
