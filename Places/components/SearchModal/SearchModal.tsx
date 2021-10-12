import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native';
import PlaceModal from '../PlaceModal/PlaceModal';
import FilterModal from './FilterModal';
import FriendPlacesFilter from './FriendPlacesFilter';
import PlacesList from './PlacesList/PlacesList';
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
  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false)
  const [placeModalVisible, setPlaceModalVisible] = useState<Boolean>(false)
  const [selectedPlace, setSelectedPlace] = useState(null)


  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible)
  }

  const handlePlacePress = () => {
    setPlaceModalVisible(!placeModalVisible)
  }

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
          {/* Both filterModalVisible and placeModalVisible toggle whether modal appears */}

          {
          filterModalVisible && 
            <FilterModal  
              filterModalVisible={filterModalVisible}
              setFilterModalVisible={setFilterModalVisible} 
              handlePress={handleFilterPress}
            />
          } 

          {
            placeModalVisible &&
            <PlaceModal 
              placeModalVisible={placeModalVisible}
              setPlaceModalVisible={setPlaceModalVisible} 
              handlePress={handlePlacePress}
              place={selectedPlace}
            />
          }

            <TouchableOpacity 
              style={styles.backButtonContainer} 
              onPress={() => setSearchVisible(!searchVisible)}
            >
              <Text style={styles.backButtonText}>Get Back Home 😰</Text>
            </TouchableOpacity>

            <SearchBar handlePress={handleFilterPress}/>
            <FriendPlacesFilter />
            <PlacesList handlePress={handlePlacePress} setPlace={setSelectedPlace} />


        </SafeAreaView>
    </Modal>
  );
}

export default SearchModal;


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, 
    backgroundColor: 'black'
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


