import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function LIContentSection(props: any) {

  const {item} = props

  return (
    <View style={styles.itemContentContainer}>
      <View style={styles.itemHeaderBar}>
        <Text style={styles.headerTextName}>{item.name}</Text>
        <Text style={styles.headerTextCity}>{item.city}</Text>
      </View>
      <View style={styles.itemContentSection}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  );
}

export default LIContentSection;

const styles = StyleSheet.create({
  itemContentContainer: {
    backgroundColor: 'gray',
    flex: 1
  },

  itemHeaderBar: {
    height: '60%',
    backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  headerTextName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 3
  },

  headerTextCity: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
  
  itemContentSection: {
    height: '60%',
    backgroundColor: 'white',
    padding: 10,
  },

  descriptionText: {
    fontSize: 12,
    fontWeight: '400',
    
  },
})