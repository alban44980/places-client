import {StyleSheet, View, Text, Modal, Image, TouchableHighlight, SafeAreaView} from 'react-native';
import React from 'react';
import CloseButton from './CloseButton';
import PlaceImage from './PlaceImage';
import HeaderSection from './HeaderSection';
import DetailsBar from './DetailsBar';
import Description from './Description';

/*
Display Image
Name of Place
Name of Person
Description
Location
City
Add / Remove from My_Places
Tags List
*/


function PlaceModal(props: any) {

  const {placeVisible, setPlaceVisible, handlePress, place} = props


  return (
    <Modal>
      <SafeAreaView style={styles.modalSAVContainer}>
        <CloseButton handlePress={handlePress} />
        <PlaceImage place={place} />
        <HeaderSection place={place}/>
        <DetailsBar place={place} />
        <Description place={place} />


      </SafeAreaView>
    </Modal>
  );
}

export default PlaceModal;

const styles = StyleSheet.create({
  modalSAVContainer: {
    flex: 1, 
    backgroundColor:'white',
    alignItems: 'center'
  },
  
})