import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

function HeaderSection(props: any) {
  const { place } = props;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.placeTitle} numberOfLines={1}>
        {place.name}
      </Text>
      <Text style={styles.placeOwner}>
        {place.user.first_name} {place.user.last_name}
      </Text>
    </View>
  );
}

export default HeaderSection;

const styles = StyleSheet.create({
  headerContainer: {
    height: '50%',
    width: '90%',
    justifyContent: 'center',
    borderColor: colors.backgroundDark,
    borderRadius: 5,
  },

  placeTitle: {
    fontSize: 20,
    color: colors.fontLight,
    textAlign: 'center',
    fontFamily: fonts.semiBold,
    paddingHorizontal: 20,
    marginBottom: 4,
  },

  placeOwner: {
    fontSize: 13,
    color: colors.fontLight,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
});
