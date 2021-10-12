import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';



function CloseButton(props: any) {

  const {handlePress} = props

  return (
    <TouchableHighlight 
    onPress={ handlePress }
    style={styles.closeButton}
  >
    <Text style={styles.closeButtonText}>Back Button</Text>
  </TouchableHighlight>
  );
}

export default CloseButton;

const styles = StyleSheet.create({
  closeButton: {
    height: '7%',
    width: '90%',
    backgroundColor: colors.backgroundMedium,
    justifyContent: 'center',
    borderRadius: 10,
  },

  closeButtonText: {
    color: colors.fontLight,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center'
  },
})