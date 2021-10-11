import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
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
              <Text style={styles.listItemName}>{item.name}</Text>
              <Text style={styles.listItemCount}>{item.placeCount}</Text>
            </View>
          )
        }
          
        }
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
  },

  list: {
    backgroundColor: 'blue',
    height: '90%',
    width: '90%',
  },

  listContainerStyle: {
    alignItems: 'center'
  },

  listItemContainer: {},

  listItemName: {},

  listItemCount: {},


})