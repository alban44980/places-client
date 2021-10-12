import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import places from '../../../dummyData/placesList'
import LIContentSection from './LIContentSection'
import PlaceModal from '../../PlaceModal/PlaceModal';




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
                <Image 
                  source={{uri: item.img}} 
                  style={styles.imageStyle}
                />

                <LIContentSection item={item}/>

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
    backgroundColor: 'green',
    alignItems: 'center',
  },

  flatListStyle: {
    backgroundColor: 'gray',
    width: '90%',
    height:'90%',
    paddingTop: 20
  },

  flatListContContStyle: {
    alignItems: 'center',
  },

  itemElementStyle: {
    height: 200,
    width: '90%',
    borderWidth: 1,
    marginBottom: 30,
  },

  touchableItemWrapper: {
    flex: 1,
  },

  imageStyle: {
    height: '45%',
    width: '100%',
    resizeMode: 'cover',
  },


})