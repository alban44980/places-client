import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ListViewBase,
  Image,
  ScrollView,
} from 'react-native';

const dummyTags = [
  'bar',
  'nightlife',
  'drinks',
  'gay',
  'dancing',
  'culture',
  'sexy',
  'beers',
  'willy',
  'koukou',
];

function Profile() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.titleContainer}>
        <Text>MY PROFILE</Text>
      </View>
      {/* DATA CONTAINER (PROFILE PIC + FOLLOWERS + FOLLOWING + BIO) */}
      <View style={styles.dataContainer}>
        <View style={styles.dataTop}>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              source={{
                uri:
                  'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png',
              }}
            />
          </View>
          <View style={styles.followersContainer}>
            <View style={styles.followersInfo}>
              <Text>Followers</Text>
            </View>
            <View style={styles.followersInfo}>
              <Text style={styles.numbers}>23</Text>
            </View>
          </View>
          <View style={styles.followingContainer}>
            <View style={styles.followersInfo}>
              <Text>Following</Text>
            </View>
            <View style={styles.followersInfo}>
              <Text style={styles.numbers}>11</Text>
            </View>
          </View>
        </View>

        <View style={styles.dataBottom}>
          <Text style={styles.bio}>
            {' '}
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unkno{' '}
          </Text>
        </View>
      </View>
      {/* BUTTON CONTAINER DOWN BELOW */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttons}>
          <Text>MY PLACES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text>SAVED PLACES</Text>
        </TouchableOpacity>
      </View>
      {/* FILTERS CONTAINER */}
      <ScrollView
        style={styles.filtersContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
      >
        {dummyTags.map((tag) => {
          return <Text style={styles.tag}>{tag}</Text>;
        })}
      </ScrollView>
      {/* // Search Results container */}
      <View style={styles.resultsContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
  titleContainer: {
    // backgroundColor: 'green',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    height: '25%',
    // backgroundColor: 'red',
  },
  dataTop: {
    height: '50%',
    flexDirection: 'row',
  },
  dataBottom: {
    height: '50%',
    // backgroundColor: 'orange',
    // margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bio: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    borderRadius: 25,
    padding: 5,
  },
  profilePicContainer: {
    width: '33%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: '40%',
    height: '80%',
  },
  followersContainer: {
    width: '20%',
    flex: 1,
    justifyContent: 'space-around',
  },
  followersInfo: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followingContainer: {
    width: '20%',
    flex: 1,
  },
  numbers: {
    fontSize: 25,
    paddingBottom: 10,
  },
  buttonsContainer: {
    marginTop: 5,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttons: {
    backgroundColor: 'gray',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  filtersContainer: {
    maxHeight: '5%',
    width: '100%',
    marginTop: 2,
  },
  contentContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    borderRadius: 20,
  },
  tag: {
    // backgroundColor: 'grey',
    // height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 3,
  },
  resultsContainer: {
    backgroundColor: 'green',
    flex: 1,
  },
});

export default Profile;
