import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MyData from '../MyProfile/MyData';
import ToggleFollowContainer from './ToggleFollowContainer';
import SearchBar from '../SearchModal/SearchBar';
import UserPlaces from './UserPlaces';

function UserProfile() {
  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);

  return (
    <SafeAreaView style={styles.userProfileContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.username}>ADRIANITO</Text>
      </View>
      <MyData />
      <ToggleFollowContainer />
      {/* //SEARCHBAR TO BE MODIFIED */}
      <SearchBar />
      <UserPlaces />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userProfileContainer: {
    flex: 1,
  },
  titleContainer: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 25,
  },
});

export default UserProfile;
