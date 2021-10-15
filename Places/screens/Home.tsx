import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';
import HomeList from '../components/HomeList/HomeList';
import SearchModal from '../components/SearchModal/SearchModal';
import PlaceModal from '../components/PlaceModal/PlaceModal';
import allFriendsCities from '../dummyData/allFriendsCities';
import homeScreenPlaces from '../dummyData/homeScreenPlaces';
import { toggleSearchVisible } from '../redux/actions/actions';
import places from '../dummyData/placesList';
import friends from '../dummyData/friends';
import colors from '../assets/styles/colors';

function Home() {
  // const [friends, setFriends] = useState<any[]>([]); //Interface Friend
  const [cities, setCities] = useState<any[]>([]); //Interface City
  const [recentlyAdded, setRecentlyAdded] = useState<any[]>([]); //Interface Place

  const userInfo: any = useSelector((state: RootState) => state.userInfo);
  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );
  const placeVisible: any = useSelector(
    (state: RootState) => state.placeVisible
  );

  //useSelector friends
  //create 2 local states with places and cities, grabbed from the friends redux state

  const dispatch = useDispatch();

  useEffect(() => {
    // setFriends([...sampleFriendsList]);
    //Apicall to get the data
    // fetch('/backenduserdata')
    //   .then((response) => response.json())
    // update userInfo state by dispatching
    // .then((data) => {
    //   dispatch(setUserData(data))
    //   dispatch(setFriends(data))
    //   dispatch(setCities(data))
    //   dispatch(setPlaces(data))
    //
    // );
    // set friends, cities, recentlyAdded
  }, []);

  function handlePress() {
    dispatch(toggleSearchVisible());
  }
  //  const  selectedPlace

  const [placeSelected, setPlaceSelected] = useState<any>(null);
  const [citySelected, setCitySelected] = useState<string>('');
  const [friendSelected, setFriendSelected] = useState<any>(null);

  return (
    <SafeAreaView style={styles.container}>
      {searchVisible && <SearchModal city={citySelected} />}
      {placeVisible && <PlaceModal place={placeSelected} />}

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Logo & Image PlaceHolder</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchTouchable} onPress={handlePress}>
          <Text style={styles.searchBar}>Where are you going ?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listsContainer}>
        <HomeList
          data={friends}
          route={'userProfile'}
          setFriend={setFriendSelected}
        />
        <HomeList
          data={allFriendsCities}
          route={'search'}
          setCity={setCitySelected}
        />
        <HomeList data={places} route={'place'} setPlace={setPlaceSelected} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.accentFun,
  },

  headerContainer: {
    height: '25%',
    backgroundColor: colors.backgroundDark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 24,
    color: colors.fontLight,
  },

  searchContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: colors.backgroundMedium,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchTouchable: {
    height: '50%',
    width: '70%',
    backgroundColor: colors.backgroundLight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 18,
  },

  searchBar: {
    width: '100%',
    color: colors.fontDark,
    opacity: 0.5,
  },

  listsContainer: {
    flex: 1,
    width: '95%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    backgroundColor: colors.backgroundDark,
  },
});

export default Home;
