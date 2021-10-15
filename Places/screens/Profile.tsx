import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';
import FiltersContainer from '../components/MyProfile/FiltersContainer';
import PlacesList from '../components/SearchModal/PlacesList';
import places from '../dummyData/placesList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';
import PlaceModal from '../components/PlaceModal/PlaceModal';
import { togglePlaceVisible} from '../redux/actions/actions';
import colors from '../assets/styles/colors';
import user from './../dummyData/user'



// Using the places reducer to access a list of selected places


function Profile() {

  const dispatch = useDispatch();
  const placesArray = user.places;
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [placesRendered, setPlacesRendered] = useState<any[]>([...placesArray]);

  const handlePlacePress = () => {
    dispatch(togglePlaceVisible());
  };

  const placeVisible: any = useSelector(
    (state: RootState) => state.placeVisible
  );
  
    // alert(placesRendered[0].name)

  return (
    <SafeAreaView style={styles.profileContainer}>
      {placeVisible && (
          <PlaceModal
            handlePress={handlePlacePress}
            place={selectedPlace}
          />
        )}

      <View style={styles.titleContainer}>
        <Text>MY PROFILE</Text>
      </View>

      <MyData user={user}/>
      <ButtonContainer />
      <FiltersContainer />
      {/* Refactor to pass data for this users places */}
      {/* <View style={{height: '80%'}}> */}
      <PlacesList 
        handlePress={handlePlacePress}
        setPlace={setSelectedPlace}
        places={placesRendered}
      />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight
  },

  titleContainer: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Profile;
