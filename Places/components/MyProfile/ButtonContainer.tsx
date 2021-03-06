import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export default function ButtonContainer({
  myPlacesSelected,
  setMyPlacesSelected,
  savedSelected,
  setSavedSelected,
}: any) {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={
          myPlacesSelected ? styles.buttonSelected : styles.buttonNotSelected
        }
        onPress={() => {
          setMyPlacesSelected(true);
          setSavedSelected(false);
        }}
      >
        <Text
          style={
            myPlacesSelected ? styles.labelSelected : styles.labelNotSelected
          }
        >
          My Places
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={savedSelected ? styles.buttonSelected : styles.buttonNotSelected}
        onPress={() => {
          setMyPlacesSelected(false);
          setSavedSelected(true);
        }}
      >
        <Text
          style={savedSelected ? styles.labelSelected : styles.labelNotSelected}
        >
          Saved
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    height: '6%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    marginTop: 10,
  },

  labelNotSelected: {
    fontSize: 13,
    fontFamily: fonts.medium,
    letterSpacing: 0.8,
  },

  labelSelected: {
    fontSize: 13,
    fontFamily: fonts.medium,
    letterSpacing: 0.8,
    color: colors.fontLight,
  },

  buttonSelected: {
    backgroundColor: colors.buttonDefault,
    width: '40%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },

  buttonNotSelected: {
    backgroundColor: 'transparent',
    width: '40%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
});
