import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';

import FiltersContainer from '../components/MyProfile/FiltersContainer';
import PlacesList from '../components/SearchModal/PlacesList';

function Profile() {
  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.titleContainer}>
        <Text>MY PROFILE</Text>
      </View>
      <MyData />
      <ButtonContainer />
      <FiltersContainer />
      {/* Refactor to pass data for this users places */}
      <PlacesList />
    </SafeAreaView>
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
