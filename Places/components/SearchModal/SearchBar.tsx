import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight,} from 'react-native';
import FilterModal from './FilterModal';
import colors from '../../assets/styles/colors';
import places from '../../dummyData/placesList';


function SearchBar(props: any) {

  const {handlePress, setSearch, setSearchResults, data, search} = props


  const searchFilter = (text: String) => {
    if (text) {
      const newData = data.filter((item: any) => {
        const itemData = item.city ? item.city.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1;
      })
      setSearchResults(newData);
      setSearch(text)
    } else {
      setSearchResults(data)
      setSearch(text)
    }
  }

  return (

    <View style={styles.searchBarContainer}>
      <TextInput 
        style={styles.searchBar}
        value={search}
        placeholder='Where are you going?'
        onChangeText={(text) => searchFilter(text)}
      />
      <TouchableHighlight 
        style={styles.filterButtonContainer}
        onPress={handlePress}
      >
        <Text style={styles.filterText}>Filter</Text>
      </TouchableHighlight>
    </View>
  );
}

export default SearchBar;


const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: colors.backgroundDark,
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
 
  },

  searchBar: {
    backgroundColor: colors.backgroundLight,
    height: '50%',
    width: '65%',
    paddingLeft: '3%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1
  },

  filterButtonContainer: {
    backgroundColor: colors.accentFun,
    height: '50%',
    width: '15%',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1
  },

  filterText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.fontDark,
    fontWeight: '700'
  },
  
})