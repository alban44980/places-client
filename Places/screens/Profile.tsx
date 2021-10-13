import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';

import FiltersContainer from '../components/MyProfile/FiltersContainer';
import PlacesList from '../components/SearchModal/PlacesList';

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
      {/* Refactor to pass data for this users places */}
      <PlacesList />
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

});

export default Profile;
