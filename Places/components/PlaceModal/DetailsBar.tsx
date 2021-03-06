import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

function DetailsBar(props: any) {
  const { place } = props;

  return (
    <View style={styles.detailBarContainer}>
      <Text style={styles.locationLabel}>Location</Text>
      <Text style={styles.locationText} numberOfLines={1}>
        {place.address}
      </Text>
    </View>
  );
}

export default DetailsBar;

const styles = StyleSheet.create({
  detailBarContainer: {
    height: '20%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    overflow: 'hidden',
  },

  locationLabel: {
    fontSize: 13,
    marginRight: 10,
    color: colors.fontLight,
    fontFamily: fonts.semiBold,
  },

  locationText: {
    fontSize: 12,
    color: colors.fontLight,
    fontFamily: fonts.medium,
    overflow: 'scroll',
  },
});
