import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../../assets/styles/colors';

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

        <View style={styles.bio}>
          <Text style={styles.bioText} numberOfLines={2}>
            Backpacker, wanderer, enjoy minimalist travel, and authentic local experiences.
            Remote worker so always finding coffee shops ☕️
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    height: '25%',
    backgroundColor: colors.backgroundLight,
    justifyContent: 'space-evenly'
  },

  dataTop: {
    height: '50%',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  profilePicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accentFun,
    borderRadius: 20
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

  dataBottom: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
 
  },

  bio: {
    width: '95%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    overflow: 'hidden'
  },

  bioText: {
    fontSize: 14,
    lineHeight: 18
  }


});

export default MyData;
