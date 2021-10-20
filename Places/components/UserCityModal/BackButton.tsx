import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../../assets/styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";
import {
  setUserData,
  toggleSearchVisible,
  togglePlaceVisible,
  setPlaceSelected,
} from "../../redux/actions/actions";
import fonts from "../../assets/styles/fonts";

function BackButton(props: any) {
  const { handlePress } = props;

  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );

  return (
    <TouchableHighlight
      onPress={() => handlePress()}
      style={styles.closeButton}
    >
      <Text style={styles.closeButtonText}>Back</Text>
    </TouchableHighlight>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  closeButton: {
    height: "5%",
    width: "22%",
    backgroundColor: colors.backgroundDark,
    borderColor: colors.backgroundLight,
    borderStyle: "solid",
    borderWidth: 0.5,
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    top: 61,
    right: 25,
    zIndex: 2,
  },

  closeButtonText: {
    color: colors.fontLight,
    fontFamily: fonts.light,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});