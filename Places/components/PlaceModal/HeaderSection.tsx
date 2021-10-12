import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

function HeaderSection(props) {
  const {place} = props
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.placeTitle}>{place.name}</Text>
      <Text style={styles.placeOwner}>Adriano "The Rocket" Gonzalez</Text>
     </View>
  );
}

export default HeaderSection;

const styles = StyleSheet.create({
  headerContainer: {
    height: '15%',
    width: '90%',
    backgroundColor: 'green',
    justifyContent: 'center'
  },

  placeTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10
  },

  placeOwner: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center'
  },

  
})