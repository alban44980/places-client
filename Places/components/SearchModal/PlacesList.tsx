import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import places from './../../dummyData/placesList'






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
              <View style={styles.itemContentContainer}>
                <View style={styles.itemHeaderBar}>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.itemContentSection}>
                  <Text>{item.city}</Text>
                </View>

              </View>
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
    width: '85%',
    height:'90%'
  },

  flatListContContStyle: {
    // alignItems: 'center'
  },

  itemElementStyle: {
    height: 200,
    width: '90%',
    borderWidth: 1,
    marginBottom: 30,
  },

  imageStyle: {
    height: '60%',
    width: '100%',
  },

  itemContentContainer: {
    backgroundColor: 'white',
    flex: 1
  },

  itemHeaderBar: {
    height: '40%',
    backgroundColor: 'lightblue'
  },

  itemContentSection: {
    height: '60%',
    backgroundColor: 'white'
  }


})