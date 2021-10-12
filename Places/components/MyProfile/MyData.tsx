import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function MyData() {
  return (
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
          been the industry's standard dummy text ever since the 1500s, when an
          unkno{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    height: '25%',
  },
  dataTop: {
    height: '50%',
    flexDirection: 'row',
  },
  dataBottom: {
    height: '50%',
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
});

export default MyData;
