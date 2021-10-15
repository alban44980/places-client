import {
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import sampleFriendsList from '../../dummyData/homeScreenFriends';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import colors from '../../assets/styles/colors';


type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function FriendsList() {

  const navigation = useNavigation<userScreenProp>();



  return (
    <View style={styles.listContainer}>
      <ScrollView 
        style={styles.scrollViewVisual}
        contentContainerStyle={styles.scrollViewFunctional}
      >
        {sampleFriendsList.map((friend: any) => {
          return (
            <TouchableOpacity
              style={styles.friendContainer}
              onPress={() => navigation.navigate('userProfile', {friend})}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.img}
                  source={{
                    uri: friend.img,
                  }}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.friendsName}>{friend.name}</Text>
              </View>


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
    backgroundColor: colors.backgroundDark,
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },

  scrollViewVisual: {
    width: '90%',
    backgroundColor: colors.backgroundLight,
    borderRadius: 10
  },

  scrollViewFunctional: {
    alignItems: 'center',
  },

  friendContainer: {
    backgroundColor: colors.accentFun,
    height: 75,
    width: '80%',
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    paddingHorizontal: 10
  },

  imageContainer: {
    width: '25%',
    height: '80%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    borderRadius: 10,
    borderWidth: 1,
    height: '90%',
    width: '90%'
  },

  textContainer: {
    marginLeft: 20,
    borderWidth: 1,
    width: '60%',
    height:'60%',
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  friendsName: {
    fontSize: 22,
    fontWeight: '400'
  }

})