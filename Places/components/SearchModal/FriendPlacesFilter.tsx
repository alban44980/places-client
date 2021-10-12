import React, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import FriendsList from '../../dummyData/searchModalFriends'





function FriendPlacesFilter() {

  const data = FriendsList



  return (
    <View style={styles.friendFilterListContainer}>
      <FlatList 
        style={styles.list}
        contentContainerStyle = {styles.listContainerStyle}
        horizontal={true}
        data={data}
        renderItem= { ({item}) => {
          return (
            <View style={styles.listItemContainer}>
              <TouchableOpacity 
                style={styles.textOverlayContainer}
              >
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemCount}>{item.placeCount}</Text>
              </TouchableOpacity>

              <Image 
                style={styles.profilePicImage}
                blurRadius={2}
                source={{uri: item.profile_pic}} 
              />
            </View>
          )
        }}
      />
    </View>
  );
}

export default FriendPlacesFilter;

const styles = StyleSheet.create({
  friendFilterListContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },

  list: {
    backgroundColor: 'black',
    height: '50%',
    width: '90%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  
  listContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  listItemContainer: {
    marginHorizontal: 15,
    width: 120,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePicImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    opacity: .35
  },

  textOverlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  listItemName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
    marginBottom: 7
  },

  listItemCount: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'white'
  },


})