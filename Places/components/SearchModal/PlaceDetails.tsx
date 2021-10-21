import React from 'react';
import { StyleSheet, View, Text, BackHandler } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import { BlurView } from 'expo-blur';

function PlaceDetails(props: any) {
  const { item } = props;

  return (
    <View style={styles.itemContentContainer}>
      {/* <View style={styles.opacityLayer}></View> */}
      <BlurView intensity={80} style={styles.itemHeaderBar}>
        <Text style={styles.headerTextName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.headerTextCity}>{item.city}</Text>
      </BlurView>
    </View>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  itemContentContainer: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
  },

  opacityLayer: {
    height: '35%',
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.backgroundMedium,
    opacity: 0.65,
  },

  itemHeaderBar: {
    height: '35%',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  headerTextName: {
    color: colors.fontLight,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 2,
    fontFamily: fonts.semiBold,
    paddingHorizontal: 30,
  },

  headerTextCity: {
    color: colors.fontLight,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.regular,
  },

  itemContentSection: {
    height: '35%',
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  descriptionText: {
    fontSize: 11,
    fontFamily: fonts.light,
    textAlign: 'center',
  },
});
