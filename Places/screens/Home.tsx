import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ListViewBase,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';
import HomeList from '../components/HomeList/HomeList';

function Home() {
  const [friends, setFriends] = useState<any[]>([]); //Interface Friend
  const [cities, setCities] = useState<any[]>([]); //Interface City
  const [recentlyAdded, setRecentlyAdded] = useState<any[]>([]); //Interface Place
  const [searchVisible, setSearchVisible] = useState<Boolean>(false);

  const userInfo: any = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    console.log('useEffect running');
    //Apicall to get the data

    // update userInfo state

    // set friends, cities, recentlyAdded
  }, []);

  function handlePress() {
    // setSearchVisible(true);
    console.log('handlepress triggered');
  }

  return (
    <View style={styles.container}>
      {/* {searchVisible && <SearchModal/>} */}
      <View style={styles.topContainer}>
        <Text style={styles.text}>MY PLACES</Text>
      </View>
      <TouchableOpacity style={styles.searchTouchable} onPress={handlePress}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchBar}>Where are you going ?</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.listsContainer}>
        <HomeList />
        <HomeList />
        <HomeList />
      </View>
      <View style={styles.navBarContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexDirection: 'column',
  },
  topContainer: {
    height: '30%',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  searchTouchable: {
    height: '15%',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '80%',
    height: '60%',
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchBar: {
    width: '100%',
    textAlign: 'center',
  },
  listsContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: 'purple',
    justifyContent: 'space-evenly',
  },
  navBarContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: 'yellow',
  },
});

export default Home;
