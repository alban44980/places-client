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
import allFriendsCities from '../dummyData/allFriendsCities';
import homeScreenPlaces from '../dummyData/homeScreenPlaces';
import sampleFriendsList from '../dummyData/homeScreenFriends';
import { getUserData } from '../redux/actions/actions';

function Home() {
  const [friends, setFriends] = useState<any[]>([]); //Interface Friend
  const [cities, setCities] = useState<any[]>([]); //Interface City
  const [recentlyAdded, setRecentlyAdded] = useState<any[]>([]); //Interface Place
  const [searchVisible, setSearchVisible] = useState<Boolean>(false);

  const userInfo: any = useSelector((state: RootState) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect running');
    setFriends([...sampleFriendsList]);
    // console.log(friends);

    //Apicall to get the data

    // update userInfo state

    // set friends, cities, recentlyAdded
  }, []);

  function handlePress() {
    setSearchVisible(!searchVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
      {searchVisible && (
        <SearchModal
          searchVisible={searchVisible}
          setSearchVisible={setSearchVisible}
        />
      )}

      <View style={styles.topContainer}>
        <Text style={styles.text}>MY PLACES</Text>
      </View>
      <TouchableOpacity style={styles.searchTouchable} onPress={handlePress}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchBar}>Where are you going ?</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.listsContainer}>
        <HomeList data={friends} />
        <HomeList data={allFriendsCities} />
        <HomeList data={homeScreenPlaces} />
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
  },
  topContainer: {
    height: '30%',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  searchTouchable: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '80%',
    height: '70%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchBar: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  listsContainer: {
    width: '100%',
    height: '55%',
    justifyContent: 'space-evenly',
  },
});

export default Home;
