import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';


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
      {
        dummyTags.map((tag) => {
          return (
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          )
        })
      }
     
    </View>
  );
}

export default Tags;

const styles = StyleSheet.create({
  tagSectionContainer: {
    height: '15%',
    width: '90%',
    backgroundColor: colors.accentFun,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },

  tagContainer: {
    height: '22%',
    width: '27%',
    backgroundColor: colors.backgroundDark,
    borderRadius: 10,
    margin: 4,
    justifyContent: 'center'
  },

  tagText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.fontLight,
    textAlign: 'center'
  }
  
})