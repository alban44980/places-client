import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';
import FiltersContainer from '../components/MyProfile/FiltersContainer';
import PlacesList from '../components/SearchModal/PlacesList';
import places from '../dummyData/placesList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';
import PlaceModal from '../components/PlaceModal/PlaceModal';
import { togglePlaceVisible } from '../redux/actions/actions';
import colors from '../assets/styles/colors';
import user from './../dummyData/user';

function Profile() {
  const userPlaces = user.places;
  const cities = user.cities;
  const dispatch = useDispatch();
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  // Places displays all the users
  const [places, setPlaces] = useState<any[]>([...userPlaces]);
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([...places]);
  const [tagSelected, setTagSelected] = useState<string[]>([]);

  const [myPlacesSelected, setMyPlacesSelected] = useState<Boolean>(true);
  const [savedSelected, setSavedSelected] = useState<Boolean>(false);

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

  const handlePlacePress = () => {
    dispatch(togglePlaceVisible());
  };

  const placeVisible: any = useSelector(
    (state: RootState) => state.placeVisible
  );

  return (
    <SafeAreaView style={styles.profileContainer}>
      {placeVisible && (
        <PlaceModal handlePress={handlePlacePress} place={selectedPlace} />
      )}

      <View style={styles.titleContainer}>
        <Text>
          {user.first_name} {user.last_name}
        </Text>
      </View>

      <MyData user={user} />
      <ButtonContainer
        myPlacesSelected={myPlacesSelected}
        setMyPlacesSelected={myPlacesSelected}
        savedSelected={savedSelected}
        setsavedSelected={setSavedSelected}
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
      <PlacesList
        handlePress={handlePlacePress}
        setPlace={setSelectedPlace}
        places={filteredPlaces}
        setPlaces={setPlaces}
        tagSelected={tagSelected}
      />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },

  titleContainer: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
