import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import CloseButton from './CloseButton';
import PlaceImage from './PlaceImage';
import HeaderSection from './HeaderSection';
import DetailsBar from './DetailsBar';
import Description from './Description';
import Tags from './Tags';
import colors from '../../assets/styles/colors';
import places from '../../dummyData/placesList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import { setPlaceSelected } from '../../redux/actions/actions';




function PlaceModal( props: any ) {
  const { place, handlePress } = props


  return (
    <Modal>
      <SafeAreaView style={styles.modalSAVContainer}>
        <CloseButton handlePress={handlePress} />
        <PlaceImage place={place} />
        <HeaderSection place={place} />
        <DetailsBar place={place} />
        <View style={styles.tagContainer}>
          <Tags tags={place.tags}/>
        </View>
        <Description place={place} />
      </SafeAreaView>
    </Modal>
  );
}

export default PlaceModal;

const styles = StyleSheet.create({
  modalSAVContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
  },

  tagContainer: {
    height: '8%',
    width: '90%',
    marginBottom: 15
  },
});
