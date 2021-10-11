import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import FriendPlacesFilter from './FriendPlacesFilter';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';


/*
What should the layout look like?
-- modal wraps the entire screen with formatting like background and size
-- search bar container at the top, contains
---- search bar 
---- filter modal trigger ----> touchable opacity that does nothing but will eventually open new modal (set state)
-- Horizontal list contianer ---> placeholder with background color and flex properties
---- horizontal friends list  ---> seperate component
-- Vertical list container ----> placeholder with background color and flex properties
---- vertical places list  ---> seperate component


*/




function SearchModal(props: any) {

  const {searchVisible, setSearchVisible} = props



  return (
    <Modal
      animationType="slide" 
      transparent={true} 
      visible={searchVisible}
      onRequestClose={() => {
        setSearchVisible(false);
       }}
    >
      <SafeAreaView style={styles.modalContainer}>
        
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => setSearchVisible(false)}>
              <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>


          <SearchBar />

          <FriendPlacesFilter />

          <PlacesList />

      
      </SafeAreaView>
    </Modal>
  );
}

export default SearchModal;


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, 
    backgroundColor: 'white'
  },

  backButtonContainer: {
    height: '7%',
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },

  backButtonText: {
    color: 'white',
    textAlign: 'center'
  },


})


