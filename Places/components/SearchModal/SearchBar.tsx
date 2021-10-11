import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';




function SearchBar() {

  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')

  
  return (
    <View style={styles.searchBarContainer}>
      <TextInput 
        style={styles.searchBar}
        value={search}
      />
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

export default SearchBar;


const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'gray',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  searchBar: {
    backgroundColor: 'white',
    height: '65%',
    width: '60%'
  },
  
})