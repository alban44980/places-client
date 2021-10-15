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

function PlaceModal({ place, handlePress }: any) {
  // const place = {
  //   id: 2,
  //   name: 'Connors Quirky Cafe',
  //   img: 'https://images.pexels.com/photos/2506993/pexels-photo-2506993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   description:
  //     'Super hip place, Connor and his baristas can really whip up a nice cold brew',
  //   location: '27 Carrer DAvila, Barcelona Spain 08005',
  //   address: '27 Carrer DAvila, Barcelona Spain 08005',
  //   city: 'Madrid',
  //   country: 'Spain',
  // };

  // const { handlePress } = props;

  return (
    <Modal>
      <SafeAreaView style={styles.modalSAVContainer}>
        <CloseButton handlePress={handlePress} />
        <PlaceImage place={place} />
        <HeaderSection place={place} />
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
    alignItems: 'center',
  },

  tagContainer: {
    height: '10%',
    width: '90%',
  },
});
