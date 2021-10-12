import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import places from '../../dummyData/placesList';
import PlaceDetails from './PlaceDetails'
import PlaceModal from '../PlaceModal/PlaceModal';
import colors from '../../assets/styles/colors';



function PlacesList(props: any) {

const {handlePress, setPlace} = props
const data = places



  return (
    <View style={styles.placesListContainer}>
      <FlatList 
        style={styles.flatListStyle}
        contentContainerStyle={styles.flatListContContStyle}
        data={data}
        horizontal={false}
        renderItem={ ({item}) => {
          return (
            <View style={styles.itemElementStyle}>
              <TouchableOpacity
                style={styles.touchableItemWrapper}
                onPress={() => {
                  setPlace(item)
                  handlePress()
                }}
              >
                <Image source={{uri: item.img}} style={styles.imageStyle} />
                <PlaceDetails item={item}/>
              </TouchableOpacity>
            </View>
          )
        }
        }
      />
    </View>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  placesListContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
  },

  flatListStyle: {
    backgroundColor: colors.backgroundMedium,
    width: '90%',
    height:'90%',
    paddingTop: 30,
    borderRadius: 10
  },

  flatListContContStyle: {
    alignItems: 'center',
  },

  itemElementStyle: {
    height: 200,
    width: '90%',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 10
  },

  touchableItemWrapper: {
    flex: 1,
  },

  imageStyle: {
    height: '42%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },


})