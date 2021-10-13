import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';


function Description(props: any) {
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
    height: '32%',
    backgroundColor: colors.backgroundMedium,
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 22
  },

  descriptionText: {
    fontSize: 17,
    lineHeight: 30,
    overflow: 'hidden',
    color: colors.fontLight
  }
  
})