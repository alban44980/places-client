import {StyleSheet, View, Text, Modal, Image, TouchableHighlight, SafeAreaView} from 'react-native';
import React from 'react';
import CloseButton from './CloseButton';
import PlaceImage from './PlaceImage';
import HeaderSection from './HeaderSection';
import DetailsBar from './DetailsBar';
import Description from './Description';
import Tags from './Tags';
import colors from '../../assets/styles/colors';





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
        <View style={styles.tagContainer}>
          <Tags />
        </View>


      </SafeAreaView>
    </Modal>
  );
}

export default PlaceModal;

const styles = StyleSheet.create({
  modalSAVContainer: {
    flex: 1, 
    backgroundColor: colors.backgroundDark,
    alignItems: 'center'
  },

  tagContainer: {
    height: '8%',
    width: '90%',
  }
  
})