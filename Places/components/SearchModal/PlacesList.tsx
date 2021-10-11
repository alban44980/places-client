import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

function PlacesList() {
  return (
    <View style={styles.placesListContainer}>
      {/* <FlatList /> */}
    </View>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  placesListContainer: {
    height: '60%',
    backgroundColor: 'green'
  }
})