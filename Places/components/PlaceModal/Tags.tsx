import {StyleSheet, View, Text} from 'react-native';

import React from 'react';

function Tags() {


  const dummyTags = [
    'bar',
    'nightlife',
    'drinks',
    'gay',
    'dancing',
    'culture',
    'sexy'
  ]

  return (
    <View style={styles.tagSectionContainer}>
     <Text>{dummyTags[0]}</Text>
    </View>
  );
}

export default Tags;

const styles = StyleSheet.create({
  tagSectionContainer: {
    height: '5%',
    width: '90%',
    backgroundColor: 'pink'
  },

  tagContainer: {
    height: '10%',
    width: '15%',
    backgroundColor: 'blue'
  },

  tagText: {
    fontSize: 10,
    fontWeight: '400',
    color: 'white'
  }
  
})