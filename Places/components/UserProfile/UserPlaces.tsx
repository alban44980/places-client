import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import userPlaces from '../../dummyData/userPlaces';

function UserPlaces() {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    // <ScrollView>
    // <ScrollView
    //   style={styles.userPlacesContainer}
    // contentContainerStyle={styles.contentContainer}
    // >

    /* {userPlaces.map((item: any) => {
        return (
          <View style={styles.itemContainer}>
            <Text>Places: {item.name}</Text>
            <Text>{item.numberOfPlaces}</Text>
          </View>
        );
      })}
    </ScrollView> */

    // </ScrollView>

    // <View style={styles.userPlacesContainer}>
    <FlatList
      data={userPlaces}
      renderItem={renderItem}
      // style={styles.userPlacesContainer}
      contentContainerStyle={styles.userPlacesContainer}
      numColumns={2}
    />
    // </View>
  );
}

const styles = StyleSheet.create({
  userPlacesContainer: {
    backgroundColor: 'lightblue',
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  contentContainer: {
    // backgroundColor: 'green',
    // width: '100%',
    // maxHeight: '100%',
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // flex: 1,
    // flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  //ISSUE WITH HEIGHT AND WIDTH BELOW
  itemContainer: {
    height: 140,
    width: 160, //160
    backgroundColor: 'red',
    margin: 20,
    // alignSelf: 'center',
  },
  // cardcontainer: {
  //   flex: 1,
  // },
});

export default UserPlaces;
