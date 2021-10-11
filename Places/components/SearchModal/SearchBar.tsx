import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight,} from 'react-native';
import FilterModal from './FilterModal';



function SearchBar(props: any) {

  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')
  const {handlePress} = props


  return (

    <View style={styles.searchBarContainer}>
      <TextInput 
        style={styles.searchBar}
        value={search}
        placeholder='Where are you going?'
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
    backgroundColor: 'gray',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchBar: {
    backgroundColor: 'white',
    height: '50%',
    width: '60%',
    paddingLeft: '3%'
  },

  filterButtonContainer: {
    backgroundColor: 'pink',
    height: '50%',
    width: '15%',
    justifyContent: 'center'
  },

  filterText: {
    fontSize: 12,
    textAlign: 'center',
  },
  
})