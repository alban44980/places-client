import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';

function Home() {
  const [friends, setFriends] = useState<any[]>([]); //Interface Friend
  const [cities, setCities] = useState<any[]>([]); //Interface City
  const [recentlyAdded, setRecentlyAdded] = useState<any[]>([]); //Interface Place
  const [searchVisible, setSearchVisible] = useState<Boolean>(false);

  const userInfo: any = useSelector((state: RootState) => state.userInfo);

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
        <TextInput
          placeholder="Where are you going ?"
          style={styles.searchBar}
        />
      </TouchableOpacity>
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
  inputContainer: {
    backgroundColor: 'green',
  },
  searchTouchable: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
  },
  searchBar: {
    width: '80%',
    height: 50,
    backgroundColor: 'yellow',
  },
});

export default Home;
