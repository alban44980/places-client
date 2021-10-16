import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../assets/styles/colors';

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
    marginVertical: 5,
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
  },

  buttons: {
    backgroundColor: colors.backgroundMedium,
    width: '25%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },

  labelText: {
    fontSize: 13,
    fontWeight: '600',
  },

  buttonSelected: {
    backgroundColor: colors.backgroundMedium,
    width: '25%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonNotSelected: {
    backgroundColor: 'transparent',
    width: '25%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});
