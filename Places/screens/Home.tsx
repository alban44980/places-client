import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
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
import fonts from "../assets/styles/fonts";

function Home() {
  const [friendList, setFriendList] = useState<any[]>([]);
  const [cityList, setCityList] = useState<any[]>([]); //Interface City
  const [recentlyAddedPlacesList, setRecentlyAddedPlacesList] = useState<any[]>(
    []
  );
  const [tags, setTags] = useState<any[]>([]);

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
    const recentlyAddedPlaces: any[] = [];

    for (let friend of userFriendInfo) {
      for (let cities of friend.Cities) {
        for (let places of cities.Places) {
          places.user = {
            username: friend.user_name,
            first_name: friend.first_name,
            last_name: friend.last_name,
          };

          recentlyAddedPlaces.push(places);
        }
      }
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
      {searchVisible && (
        <SearchModal city={citySelected} friendList={friendList} />
      )}
      {placeVisible && <PlaceModal place={placeSelected} />}

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Logo & Image PlaceHolder</Text>
        </View>

        <View style={styles.homeImageBannerContainer}>
          <Image
            style={styles.imageBanner}
            source={{
              uri: "https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            }}
          />
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.searchTouchable}
            onPress={handlePress}
          >
            <Text style={styles.searchBar}>Where are you going ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listsContainer}>
          <HomeList
            key={3}
            data={recentlyAddedPlacesList}
            route={"place"}
            setPlace={setPlaceSelected}
          />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },

  headerContainer: {
    height: 120,
    backgroundColor: colors.backgroundDark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontSize: 22,
    color: colors.fontLight,
    fontFamily: fonts.semiBold,
  },

  homeImageBannerContainer: {
    height: 350,
    marginBottom: 10,
  },

  imageBanner: {
    flex: 1,
  },

  searchContainer: {
    width: "100%",
    height: 100,
    backgroundColor: colors.backgroundDark,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  searchTouchable: {
    height: "50%",
    width: "75%",
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
    width: "90%",
    justifyContent: "space-evenly",
    alignSelf: "center",
    backgroundColor: colors.backgroundDark,
  },
});

export default Home;
