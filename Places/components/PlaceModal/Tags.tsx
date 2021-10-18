import {StyleSheet, View, Text, TouchableHighlight, ScrollView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/styles/colors';
import tags from '../../dummyData/tagsList';


function Tags() {

  // there should be some kind of state for selected --> this is used for rendering color to begin with

  // for now this is the same tags list but in reality it will be the tags associated with a place or 
  // unique tags associated with a collection of places
  const tagsList = tags


  return (
    <View style={styles.tagSectionContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          tagsList.map((tag) => {
            return (
              <View  style={styles.tagContainer} >
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            )
          })
        }
      </ScrollView>
     
    </View>
  );
}

export default Tags;

const styles = StyleSheet.create({
  tagSectionContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    overflow: 'scroll',
    borderRadius: 5,
  },

  tagContainer: {
    height: '100%',
    minWidth: 50,
    maxWidth: 100,
    backgroundColor: colors.backgroundDark,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingHorizontal: 10
  },


  tagText: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.fontLight,
    textAlign: 'center',
    letterSpacing: 1.2,
  }
  
})