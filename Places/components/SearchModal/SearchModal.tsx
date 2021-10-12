import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native';
import PlaceModal from '../PlaceModal/PlaceModal';
import FilterModal from './FilterModal';
import FriendPlacesFilter from './FriendPlacesFilter';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';
import colors from '../../assets/styles/colors';
import CloseButton from '../PlaceModal/CloseButton';




function SearchModal(props: any) {

  const {searchVisible, setSearchVisible} = props
  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false)
  const [placeModalVisible, setPlaceModalVisible] = useState<Boolean>(false)
  // waiting for place interface before declaring below
  const [selectedPlace, setSelectedPlace] = useState<any>(null)

  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible)
  }

  const handlePlacePress = () => {
    setPlaceModalVisible(!placeModalVisible)
  }

  const handleClosePress = () => {
    setSearchVisible(!searchVisible)
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

        <SafeAreaView style={styles.searchScreenContainer}>

          {filterModalVisible && 
            <FilterModal  
              filterModalVisible={filterModalVisible}
              setFilterModalVisible={setFilterModalVisible} 
              handlePress={handleFilterPress}
            />} 

          {placeModalVisible &&
            <PlaceModal 
              placeModalVisible={placeModalVisible}
              setPlaceModalVisible={setPlaceModalVisible} 
              handlePress={handlePlacePress}
              place={selectedPlace}
            />}

            <CloseButton handlePress={handleClosePress}/>
            <SearchBar handlePress={handleFilterPress}/>
            <FriendPlacesFilter />
            <PlacesList handlePress={handlePlacePress} setPlace={setSelectedPlace} />

        </SafeAreaView>
    </Modal>
  );
}

export default SearchModal;


const styles = StyleSheet.create({
  searchScreenContainer: {
    flex: 1, 
    backgroundColor: colors.backgroundDark,
  },


})


