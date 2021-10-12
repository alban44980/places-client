import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import React from 'react';

function CloseButton(props) {

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
    backgroundColor: 'blue',
    justifyContent: 'center'
  },

  closeButtonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center'
  },
})