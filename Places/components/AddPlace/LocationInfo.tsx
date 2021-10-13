import {StyleSheet, View, Text, TextInput} from 'react-native';
import colors from '../../assets/styles/colors';




import React from 'react';

function LocationInfo() {
  return (
    <View style={styles.locationContainer}>

      <View style={styles.searchInputLabelContainer}> 
        <Text style={styles.labelText}>Address</Text>
        <TextInput style={styles.inputField} placeholder={'Enter address'}/>
      </View>


      <View style={styles.searchInputLabelContainer}> 
        <Text style={styles.labelText}>Choose the City</Text>
        <TextInput style={styles.inputField} placeholder={'Enter city'}/>
      </View>

    </View>
  );
}

export default LocationInfo;


const styles = StyleSheet.create({
  locationContainer: {
    height: '25%',
    width: '80%',
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  searchInputLabelContainer: {
    height: '45%',
    width: '100%',
    backgroundColor: colors.backgroundLight,
    alignItems: 'center'
  },
  
  labelText: {
    color: colors.fontDark,
    fontSize: 12,
    fontWeight: '700',
    left: -80,
    marginBottom: 3
  },

  inputField: {
    backgroundColor: colors.backgroundLight,
    height: '50%',
    width: '90%',
    paddingLeft: '3%',
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1
  },





})