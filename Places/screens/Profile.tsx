import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';
import FiltersContainer from '../components/MyProfile/FiltersContainer';
import PlacesList from '../components/SearchModal/PlacesList';
import places from '../dummyData/placesList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';
import PlaceModal from '../components/PlaceModal/PlaceModal';
import { setPlaceSelected, togglePlaceVisible } from '../redux/actions/actions';
import colors from '../assets/styles/colors';
import user from './../dummyData/user';
import fonts from '../assets/styles/fonts';
import ApiService from '../ApiService';




function Profile() {

  // onload useEffect
  useEffect( () => {
    async function getUser() {
      let user = await ApiService.getMyCityPlaces(refreshToken, accessToken)
      setUser(user)
    }
    getUser()

  setCities(user.Cities)
  let userPlaces = []
  for (let city of user.Cities) {

    for (let place of city.Places) {
      userPlaces.push(place)
    }
  }
  setPlaces(userPlaces)

  }, [])

  
  
  // states
  const [user, setUser] = useState<any>({})
  const [places, setPlaces] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([...places]);
  const [tagSelected, setTagSelected] = useState<string[]>([]);
  const [myPlacesSelected, setMyPlacesSelected] = useState<Boolean>(true);
  const [savedSelected, setSavedSelected] = useState<Boolean>(false);


  // redux states
  const dispatch = useDispatch();
  const handlePlacePress = () => {dispatch(togglePlaceVisible())};
  const placeVisible: any = useSelector((state: RootState) => state.placeVisible);
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector((state: RootState) => state.refreshToken);


  // functions
  const filterPlaces = () => {
    let filteredPlacesList: any[] = [];
    if (tagSelected.length) {
      places.forEach((place) => {
        if (place.city === tagSelected) filteredPlacesList.push(place);
      });
      setFilteredPlaces(filteredPlacesList);
    } else {
      setFilteredPlaces(places);
    }
  };

  useEffect(() => {
    filterPlaces();
  }, [tagSelected]);






  return (
    // <ScrollView style={{flex: 1}}>

      <SafeAreaView style={styles.profileContainer}>
        {placeVisible && (
          <PlaceModal handlePress={handlePlacePress} place={selectedPlace} />
        )}

        <View style={styles.usernameContainer}>
          <Text style={styles.usernameHeader}>
            {user.username}
          </Text>
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
          tagSelected={tagSelected}
          setTagSelected={setTagSelected}
          filterPlaces={filterPlaces}
        />
        {/* Refactor to pass data for this users places */}
        {/* <View style={{height: '80%'}}> */}
        {myPlacesSelected ? (
          <View style={{flex: 1}}>
            <PlacesList
              handlePress={handlePlacePress}
              setPlace={setSelectedPlace}
              places={filteredPlaces}
              setPlaces={setPlaces}
              tagSelected={tagSelected}
            />
          </View>
        ) : null}

        {/* </View> */}
      </SafeAreaView>
    // </ScrollView>
  );
}







const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center'
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
