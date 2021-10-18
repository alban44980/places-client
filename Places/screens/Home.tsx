import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/reducers";
import HomeList from "../components/HomeList/HomeList";
import SearchModal from "../components/SearchModal/SearchModal";
import PlaceModal from "../components/PlaceModal/PlaceModal";
import allFriendsCities from "../dummyData/allFriendsCities";
import homeScreenPlaces from "../dummyData/homeScreenPlaces";
import { toggleSearchVisible } from "../redux/actions/actions";
import places from "../dummyData/placesList";
import friends from "../dummyData/friends";
import colors from "../assets/styles/colors";

function Home() {
  const [friendList, setFriendList] = useState<any[]>([]);
  const [cityList, setCityList] = useState<any[]>([]); //Interface City
  const [recentlyAddedPlacesList, setRecentlyAddedPlacesList] = useState<any[]>(
    []
  );

  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );
  const placeVisible: any = useSelector(
    (state: RootState) => state.placeVisible
  );
  //parses files
  function extractInfo() {
    //set friend list
    setFriendList(userFriendInfo);

    //set cities
    const friendCities = [];
    for (let friend of userFriendInfo) {
      friendCities.push(...friend.Cities);
    }
    setCityList(friendCities);

    //set Recently added
    const recentlyAddedPlaces = [];
    //create a list of places
    for (let cities of friendCities) {
      recentlyAddedPlaces.push(...cities.Places);
    }

    //need to sort
    setRecentlyAddedPlacesList(recentlyAddedPlaces);
  }

  //useSelector friends
  //create 2 local states with places and cities, grabbed from the friends redux state

  const dispatch = useDispatch();

  useEffect(() => {
    extractInfo();
  }, [userFriendInfo]);

  function handlePress() {
    dispatch(toggleSearchVisible());
  }

  const [placeSelected, setPlaceSelected] = useState<any>(null);

  const [citySelected, setCitySelected] = useState<string>("");
  const [friendSelected, setFriendSelected] = useState<any>(null);

  return (
    <SafeAreaView style={styles.container}>
      {searchVisible && <SearchModal city={citySelected} />}
      {placeVisible && <PlaceModal place={placeSelected} />}

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Logo & Image PlaceHolder</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchTouchable} onPress={handlePress}>
          <Text style={styles.searchBar}>Where are you going ?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listsContainer}>
        <HomeList
          key={1}
          data={friendList}
          route={"userProfile"}
          setFriend={setFriendSelected}
        />
        <HomeList
          key={2}
          data={cityList}
          route={"search"}
          setCity={setCitySelected}
        />
        <HomeList
          key={3}
          data={recentlyAddedPlacesList}
          route={"place"}
          setPlace={setPlaceSelected}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.accentFun,
  },

  headerContainer: {
    height: "25%",
    backgroundColor: colors.backgroundDark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontSize: 24,
    color: colors.fontLight,
  },

  searchContainer: {
    width: "100%",
    height: "15%",
    backgroundColor: colors.backgroundMedium,
    justifyContent: "center",
    alignItems: "center",
  },

  searchTouchable: {
    height: "50%",
    width: "70%",
    backgroundColor: colors.backgroundLight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingLeft: 18,
  },

  searchBar: {
    width: "100%",
    color: colors.fontDark,
    opacity: 0.5,
  },

  listsContainer: {
    flex: 1,
    width: "95%",
    justifyContent: "space-evenly",
    alignSelf: "center",
    backgroundColor: colors.backgroundDark,
  },
});

export default Home;
