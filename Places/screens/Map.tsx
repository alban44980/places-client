//@ts-nocheck

import React, { useState, useEffect } from 'react';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
} from 'react-native';
import CityInput from '../components/AddPlace/CityInput';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import colors from '../assets/styles/colors';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';
import places from '../dummyData/placesList';
import PlacesList from '../components/SearchModal/PlacesList';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<String>('');
  const [inputValue, setInputValue] = useState<String>('');
  const [cityCoords, setCityCoords] = useState<any>();
  const [country, setCountry] = useState<String>('');
  const [placeList, setPlaceList] = useState<any[]>([]);
  const [currentPlaceReview, setCurrentPlaceReview] = useState<any>(null);

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
    setPlaceList(placesList);
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
                      onPress={() => {
                        console.log('press function running');
                        console.log(placeList[0].location);
                        for (let i = 0; i < placeList.length; i++) {
                          let coords = makeItAnObject(placeList[i].location);
                          console.log('COORDS CONSOLE LOGGED ==> ', coords);
                          if (
                            coords.lat === place.lat &&
                            coords.lng === place.lng
                          ) {
                            console.log('WE FOUND OUR MATCH HEEEEEEEE');
                            setCurrentPlaceReview(placeList[i]);
                            break;
                          }
                        }
                      }}
                    />
                  ); //>
                })
              : null}
          </MapView>
          <View style={styles.previewContainer}>
            {currentPlaceReview ? (
              <View style={styles.placePreviewContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={{ width: '80%', height: '80%', borderRadius: 20 }}
                    source={{
                      uri: currentPlaceReview.img,
                    }}
                  />
                </View>
                <View style={styles.infoContainer}>
                  <View style={styles.placeName}>
                    <Text style={styles.title}>{currentPlaceReview.name}</Text>
                  </View>
                  <View style={styles.tagsContainer}>
                    {currentPlaceReview.Tags.map((tag) => {
                      return (
                        <Text style={{ color: colors.fontLight, margin: 2 }}>
                          #{tag.name}
                        </Text>
                      );
                    })}
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.viewButton}
                      onPress={() => {
                        for (let tag of currentPlaceReview.Tags) {
                          console.log(tag.name);
                        }
                        // console.log(currentPlaceReview.Tags);
                      }}
                    >
                      <Text style={{ fontSize: 20 }}>View</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
    // height: '70%',
  },
  map: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height / 1.3,
  },
  previewContainer: {
    backgroundColor: colors.backgroundDark,
    // flexGrow: 1,
    height: '30%',
  },
  beforeContainer: {
    backgroundColor: colors.backgroundDark,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placePreviewContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    height: '80%',
  },
  imageContainer: {
    // backgroundColor: 'blue',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 30,
    // alignItems: 'center',
  },
  infoContainer: {
    width: '50%',
    // backgroundColor: 'red',
  },
  placeName: {
    // backgroundColor: 'yellow',
    height: '30%',
    // width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
  },
  title: {
    color: colors.fontLight,
    fontSize: 18,
  },
  tagsContainer: {
    height: '25%',
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    // backgroundColor: 'red',
    height: '50%',
    justifyContent: 'center',
    marginTop: 10,
    // alignItems: 'center',
  },
  viewButton: {
    height: '70%',
    width: '70%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 30,
  },
});

export default Map;
