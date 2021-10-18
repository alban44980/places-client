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
          console.log('my places button hit');
          setMyPlacesSelected(true);
          setSavedSelected(false);
        }}
      >
        <Text style={styles.labelText}>My Places</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={savedSelected ? styles.buttonSelected : styles.buttonNotSelected}
        onPress={() => {
          console.log('saved button hit');
          setMyPlacesSelected(false);
          setSavedSelected(true);
        }}
      >
        <Text style={styles.labelText}>Saved</Text>
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

  labelText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: fonts.medium,
    letterSpacing: .8
  },

  buttonSelected: {
    backgroundColor: colors.backgroundMedium,
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
