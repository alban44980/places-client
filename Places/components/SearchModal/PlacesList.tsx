import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import places from './../../dummyData/placesList'
import LIContentSection from './PlacesListItemContentSection'





function PlacesList() {


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
              <Image 
                source={{uri: item.img}} 
                style={styles.imageStyle}
                
              />
              <LIContentSection item={item}/>
      
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
    height: '60%',
    backgroundColor: 'green',
    alignItems: 'center'
  },

  flatListStyle: {
    backgroundColor: 'gray',
    width: '90%',
    height:'90%'
  },

  flatListContContStyle: {
    alignItems: 'center'

  },

  itemElementStyle: {
    height: 200,
    width: '90%',
    borderWidth: 1,
    marginBottom: 30,
  },

  imageStyle: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain'
  },


})