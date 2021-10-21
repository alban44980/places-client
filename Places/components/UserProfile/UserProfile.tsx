import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MyData from '../MyProfile/MyData';
import ToggleFollowContainer from './ToggleFollowContainer';
import SearchBar from '../SearchModal/SearchBar';
import UserPlaces from './UserPlaces';
import { RootState } from '../../redux/reducers/reducers';
import { useSelector } from 'react-redux';
import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import UserCityPlacesModal from '../UserCityModal/UserCityPlacesModal';

function UserProfile(props: any) {
  const data = props.route.params;
  const { goBack } = props.navigation;

  const [cityPlacesVisible, setCityPlacesVisible] = useState<Boolean>(false);
  const [selectedCityInfo, setSelectedCityInfo] = useState<string>('');

  const [selectedUser, setSelectedUser] = useState<{
    user_name: string;
    first_name: string;
    Cities: string;
  }>({ user_name: '', first_name: '', Cities: '' });

  useEffect(() => {
    setSelectedUser(data);
  }, []);

  const friendId: string = data.id;

  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  // function getFriendPageInfo() {
  //   for (let friend of userFriendInfo) {
  //     if (friend.id === friendId) {
  //       setSelectedUser(friend);
  //     }
  //   }
  // }

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);

  return (
    <SafeAreaView style={styles.userProfileContainer}>
      {cityPlacesVisible && (
        <UserCityPlacesModal
          setCityPlacesVisible={setCityPlacesVisible}
          cityPlacesVisible={cityPlacesVisible}
          setSelectedCityInfo={setSelectedCityInfo}
          selectedCityInfo={selectedCityInfo}
        />
      )}

      <View style={styles.usernameContainer}>
        <Text style={styles.usernameHeader}>{selectedUser.user_name}</Text>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => goBack()}
        >
          <Text style={styles.backButtonLabel}>Back</Text>
        </TouchableOpacity>
      </View>

      <MyData user={selectedUser} />
      <ToggleFollowContainer
        setSelectedUser={setSelectedUser}
        friendId={friendId}
      />
      <UserPlaces
        citiesPlaces={selectedUser.Cities}
        setCityPlacesVisible={setCityPlacesVisible}
        cityPlacesVisible={cityPlacesVisible}
        setSelectedCityInfo={setSelectedCityInfo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userProfileContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
  },

  usernameContainer: {
    height: '7%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  usernameHeader: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },

  backButtonContainer: {
    position: 'absolute',
    height: 30,
    width: 80,
    backgroundColor: colors.buttonDefault,
    right: 15,
    top: -10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 2,
  },

  backButtonLabel: {
    fontFamily: fonts.semiBold,
    fontSize: 13,
    color: colors.fontDark,
  },
});

export default UserProfile;
