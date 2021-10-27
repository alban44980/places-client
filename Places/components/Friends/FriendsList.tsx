import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/styles/colors';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { BlurView } from 'expo-blur';
import fonts from '../../assets/styles/fonts';

function FriendsList({ friendsList }: any) {
  type userScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<userScreenProp>();

  const handlePress = (friend: any) => {
    const data = friend;
    navigation.navigate('userProfile', data);
  };

  return (
    <View style={styles.listContainer}>
      <ScrollView
        style={styles.scrollViewVisual}
        contentContainerStyle={styles.scrollViewFunctional}
      >
        {friendsList.map((friend: any) => {
          return (
            <TouchableOpacity
              style={styles.friendContainer}
              key={friend.user_name}
              onPress={() => handlePress(friend)}
            >
              <BlurView style={styles.blurStyle} intensity={100}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: friend.img,
                    }}
                  />
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.friendsUserName}>{friend.user_name}</Text>
                  <Text style={styles.friendsName}>
                    {friend.first_name} {friend.last_name}
                  </Text>
                </View>
              </BlurView>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default FriendsList;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.backgroundLight,
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },

  scrollViewVisual: {
    width: '90%',
    borderRadius: 10,
  },

  scrollViewFunctional: {
    alignItems: 'center',
  },

  friendContainer: {
    height: 75,
    width: '80%',
    marginVertical: 15,
    borderColor: colors.backgroundLight,
  },

  blurStyle: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: '100%',
  },

  imageContainer: {
    width: '25%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    borderRadius: 100,
    borderWidth: 1,
    height: 60,
    width: 60,
  },

  textContainer: {
    marginLeft: 20,
    width: '60%',
    height: '60%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  friendsName: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: colors.backgroundMedium,
  },

  friendsUserName: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});
