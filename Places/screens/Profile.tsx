import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';

import FiltersContainer from '../components/MyProfile/FiltersContainer';

function Profile() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.titleContainer}>
        <Text>MY PROFILE</Text>
      </View>
      {/* DATA CONTAINER (PROFILE PIC + FOLLOWERS + FOLLOWING + BIO) */}
      <MyData />
      {/* BUTTON CONTAINER DOWN BELOW */}
      <ButtonContainer />
      {/* FILTERS CONTAINER */}
      <FiltersContainer />
      {/* // Search Results container */}
      <View style={styles.resultsContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  titleContainer: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
});

export default Profile;
