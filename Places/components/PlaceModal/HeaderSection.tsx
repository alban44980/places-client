import { StyleSheet, View, Text } from "react-native";
import React from "react";
import colors from "../../assets/styles/colors";
import fonts from "../../assets/styles/fonts";

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
    height: "13%",
    width: "90%",
    backgroundColor: colors.backgroundLight,
    justifyContent: "center",
    marginBottom: 4,
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    borderRadius: 5,
  },

  placeTitle: {
    fontSize: 18,
    color: colors.fontDark,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: fonts.semiBold,
    paddingHorizontal: 20,
    marginBottom: 3,
  },

  placeOwner: {
    fontSize: 14,
    color: colors.fontDark,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.regular,
  },
});
