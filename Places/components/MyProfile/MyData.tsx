import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../../assets/styles/colors';





function MyData(props: any) {


  const { user } = props

  return (
    <View style={styles.dataContainer}>
      <View style={styles.dataTop}>
        
        <View style={styles.profilePicContainer}>
          <Image style={styles.profilePic} source={{uri: user.img}} />
          <Text style={styles.fullNameText}>{user.first_name} {user.last_name}</Text>
        </View>

        <View style={styles.followersContainer}>
          <View style={styles.followersInfo}>
            <Text>Followers</Text>
          </View>
          <View style={styles.followersInfo}>
            <Text style={styles.numbers}>{user.followers_count}</Text>
          </View>
        </View>

        <View style={styles.followingContainer}>
          <View style={styles.followersInfo}>
            <Text>Following</Text>
          </View>
          <View style={styles.followersInfo}>
            <Text style={styles.numbers}>{user.following_count}</Text>
          </View>
        </View>
      </View>

      <View style={styles.dataBottom}>

        <View style={styles.bio}>
          <Text style={styles.bioText} numberOfLines={2}>{user.bio}</Text>

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
    height: '60%',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  profilePicContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.accentFun,
    borderRadius: 20
  },

  profilePic: {
    width: '70%',
    height: '75%',
    borderRadius: 100,
    borderColor: colors.backgroundDark,
    
  },

  fullNameText: {

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
