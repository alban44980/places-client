import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';




function MyData(props: any) {


  const { user } = props

  return (
    <View style={styles.dataContainer}>
      <View style={styles.dataTop}>
        
        <View style={styles.profilePicContainer}>
          {
          user.img ?
          <Image style={styles.profilePic} source={{uri: user.img}} />
          : 
          <Image style={styles.profilePic} source={{uri: 'https://images.pexels.com/photos/9072452/pexels-photo-9072452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} />

          }
          <Text style={styles.fullNameText} numberOfLines={1}>{user.first_name} {user.last_name}</Text>
        </View>

        <View style={styles.followDataContainer}>
            <Text style={styles.followText}>Followers</Text>
            <Text style={styles.followNumbers}>{user.followers_count}</Text>
        </View>

        <View style={styles.followDataContainer}>
            <Text style={styles.followText}>Following</Text>
            <Text style={styles.followNumbers}>{user.following_count}</Text>
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
    justifyContent: 'space-evenly',
    width: '95%'
  },

  dataTop: {
    height: '60%',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10
  },

  profilePicContainer: {
    height: '100%',
    width: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  profilePic: {
    width: '60%',
    height: '75%',
    borderRadius: 100,
    borderColor: colors.backgroundDark,
    marginBottom: 10,
    borderWidth: .5
  },

  fullNameText: {
    fontFamily: fonts.medium,
    fontSize: 13,
    letterSpacing: .2
  },

  followDataContainer: {
    width: '20%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },

  followersInfo: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  followText: {
    fontFamily: fonts.regular,
    fontSize: 13
  },

  followNumbers: {
    fontSize: 20,
    fontFamily: fonts.medium
  },

  dataBottom: {
    height: '35%',
    justifyContent: 'center',
    paddingVertical: 0,
    alignItems: 'center'
  },

  bio: {
    width: '93%',
    paddingHorizontal: 20,
    paddingVertical: 7,
    overflow: 'hidden',
    marginBottom: 10
  },

  bioText: {
    fontSize: 12.5,
    fontFamily: fonts.regular,
    lineHeight: 20
  }


});

export default MyData;
