import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

function DetailsBar(props) {
  const {place} = props

  return (
    <View style={styles.detailBarContainer}>
      <Text style={styles.locationLabel}>Location</Text>
      <Text style={styles.locationText}>{place.location}</Text>
    </View>
  );
}

export default DetailsBar;

const styles = StyleSheet.create({
  detailBarContainer: {
    height: '5%',
    width: '90%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationLabel: {
    fontSize: 15,
    fontWeight: '800',
    marginRight: 10
  },
  locationText: {
    fontSize: 12,
    fontWeight: '400'
  }
  
})