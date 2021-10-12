import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';


function HeaderSection(props: any) {
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
    height: '13%',
    width: '90%',
    backgroundColor: colors.backgroundMedium,
    justifyContent: 'center',
    marginBottom: 4,
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    borderRadius: 5
  },

  placeTitle: {
    fontSize: 25,
    color: colors.fontLight,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10
  },

  placeOwner: {
    fontSize: 15,
    color: colors.fontLight,
    fontWeight: '400',
    textAlign: 'center'
  },

  
})