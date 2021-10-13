import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MyStack from '../Navigation/StackNavigator';

export default function ButtonContainer() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('userProfile')}
      >
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
