import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../assets/styles/colors';



export default function ButtonContainer() {
  return (
    <View style={styles.buttonsContainer}>

      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.labelText}>My Places</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
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
    backgroundColor: colors.backgroundLight
  },

  buttons: {
    backgroundColor: colors.backgroundMedium,
    width: '25%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1
  },

  labelText: {
    fontSize: 13,
    fontWeight: '600'
  }
});
