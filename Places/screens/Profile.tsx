import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';
import FiltersContainer from '../components/MyProfile/FiltersContainer';
import PlacesList from '../components/SearchModal/PlacesList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';
import PlaceModal from '../components/PlaceModal/PlaceModal';
import colors from '../assets/styles/colors';
import fonts from '../assets/styles/fonts';
import ApiService from '../ApiService';

function Profile() {
  // onload useEffect
  useEffect(() => {
    async function getUser() {
      let user = await ApiService.getMyCityPlaces(refreshToken, accessToken);
      setUser(user);
      setCities(user.Cities);
      let userPlaces = [];
      for (let city of user.Cities) {
        for (let place of city.Places) {
          place.user = {
            username: user.user_name,
            first_name: user.first_name,
            last_name: user.last_name,
          };
          userPlaces.push(place);
        }
      }
      setPlaces(userPlaces);
      setFilteredPlaces(userPlaces);
    }
    getUser();
  }, []);

  // States
  const [user, setUser] = useState<any>({});
  const [places, setPlaces] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([]);
  const [citySelected, setCitySelected] = useState<string[]>([]);
  const [myPlacesSelected, setMyPlacesSelected] = useState<Boolean>(true);
  const [savedSelected, setSavedSelected] = useState<Boolean>(false);
  const [placeVisible, setPlaceVisible] = useState<Boolean>(false);
  const [savedPlaces, setSavedPlaces] = useState<any[]>([]);

  // Redux states
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );

  // Functions
  const filterPlaces = () => {
    let filteredPlacesList: any[] = [];
    if (citySelected.length) {
      places.forEach((place) => {
        if (place.city === citySelected) filteredPlacesList.push(place);
      });
      setFilteredPlaces(filteredPlacesList);
    } else {
      setFilteredPlaces(places);
    }
  };

  //grab user's saved places from backend and saves state
  const initSavedPlaces = async (): Promise<void> => {
    const allSavedPlaces = await ApiService.getSavedPlaces(
      refreshToken,
      accessToken
    );
    const savedPlacesArr = [];
    for (let place of allSavedPlaces.SavedPlaces) {
      place.user = {
        username: allSavedPlaces.user_name,
        first_name: allSavedPlaces.first_name,
        last_name: allSavedPlaces.last_name,
      };
      savedPlacesArr.push(place);
    }

    //need to loop through each saved place and add the following
    setSavedPlaces(savedPlacesArr);
  };

  const handlePlacePress = () => {
    setPlaceVisible(!placeVisible);
  };

  useEffect(() => {
    initSavedPlaces();
  }, [savedSelected]);

  useEffect(() => {
    filterPlaces();
  }, [citySelected]);

  return (
    <SafeAreaView style={styles.profileContainer}>
      {placeVisible && (
        <PlaceModal
          showSaveButton={true}
          place={selectedPlace}
          placeVisible={placeVisible}
          setPlaceVisible={setPlaceVisible}
        />
      )}

      <View style={styles.usernameContainer}>
        <Text style={styles.usernameHeader}>{user.user_name}</Text>
      </View>

      <MyData user={user} />
      <ButtonContainer
        myPlacesSelected={myPlacesSelected}
        setMyPlacesSelected={setMyPlacesSelected}
        savedSelected={savedSelected}
        setSavedSelected={setSavedSelected}
      />

      <FiltersContainer
        cities={cities}
        places={places}
        tagSelected={citySelected}
        setTagSelected={setCitySelected}
        filterPlaces={filterPlaces}
      />

      {myPlacesSelected ? (
        <View style={{ flex: 1 }}>
          <PlacesList
            handlePress={handlePlacePress}
            setPlace={setSelectedPlace}
            places={filteredPlaces}
            setPlaces={setPlaces}
            tagSelected={citySelected}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <PlacesList
            handlePress={handlePlacePress}
            setPlace={setSelectedPlace}
            places={savedPlaces}
            setPlaces={setPlaces}
            tagSelected={citySelected}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
  },

  usernameContainer: {
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  usernameHeader: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});

export default Profile;
