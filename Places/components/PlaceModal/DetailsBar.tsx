import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';

function DetailsBar(props: any) {
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
    backgroundColor: colors.backgroundDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },

  locationLabel: {
    fontSize: 15,
    fontWeight: '800',
    marginRight: 10,
    color: colors.fontLight,
  },

  locationText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.fontLight,
  },
  
})