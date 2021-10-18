import { StyleSheet, View, Text } from "react-native";
import React from "react";
import colors from "../../assets/styles/colors";
import fonts from "../../assets/styles/fonts";

function DetailsBar(props: any) {
  const { place } = props;

  return (
    <View style={styles.detailBarContainer}>
      <Text style={styles.locationLabel}>Location</Text>
      <Text style={styles.locationText}>{place.address}</Text>
    </View>
  );
}

export default DetailsBar;

const styles = StyleSheet.create({
  detailBarContainer: {
    height: "5%",
    width: "90%",
    backgroundColor: colors.backgroundLight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 5,
  },

  locationLabel: {
    fontSize: 13,
    marginRight: 10,
    color: colors.fontDark,
    fontFamily: fonts.semiBold,
  },

  locationText: {
    fontSize: 11,
    color: colors.fontDark,
    fontFamily: fonts.light,
  },
});
