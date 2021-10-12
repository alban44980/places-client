import {StyleSheet, View, Text, ScrollView} from 'react-native';

import React from 'react';

function Description(props) {
  const {place} = props
  return (
    <View style={styles.descriptionContainer}>
      <ScrollView >
        <Text style={styles.descriptionText}>{place.description}</Text>
      </ScrollView>
    </View>
  );
}

export default Description;

const styles = StyleSheet.create({
  descriptionContainer: {
    height: '30%',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15
  },

  descriptionText: {
    fontSize: 20,
    lineHeight: 30,
    overflow: 'hidden'
  }
  
})