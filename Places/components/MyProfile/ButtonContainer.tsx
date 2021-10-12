import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ButtonContainer() {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttons}>
        <Text>MY PLACES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text>SAVED PLACES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 5,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttons: {
    backgroundColor: 'gray',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
