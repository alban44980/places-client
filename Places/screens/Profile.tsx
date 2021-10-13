import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import MyData from '../components/MyProfile/MyData';
import ButtonContainer from '../components/MyProfile/ButtonContainer';

import FiltersContainer from '../components/MyProfile/FiltersContainer';

function Profile() {
  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.titleContainer}>
        <Text>MY PROFILE</Text>
      </View>
      <MyData />
      <ButtonContainer />
      <FiltersContainer />
      <View style={styles.resultsContainer}></View>
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
  resultsContainer: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
});

export default Profile;
