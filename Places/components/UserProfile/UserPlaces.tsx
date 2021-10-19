import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";

function UserPlaces({ citiesPlaces }: any) {
  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  const handlePress = () => {
    console.log("poop");
    console.log(citiesPlaces);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image
        style={styles.img}
        source={{
          uri: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }}
        resizeMode="cover"
      />
      <Text>{item.name}</Text>
      {item.Places.length === 1 ? (
        <Text>{item.Places.length} Place</Text>
      ) : (
        <Text>{item.Places.length} Places</Text>
      )}
    </TouchableOpacity>
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
      data={citiesPlaces}
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
    // backgroundColor: 'lightblue',
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: "center",
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
    backgroundColor: "lightblue",
    margin: 20,
    // alignSelf: 'center',
  },
  // cardcontainer: {
  //   flex: 1,
  // },

  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default UserPlaces;
