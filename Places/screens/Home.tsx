import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';

function Home() {
  const [friends, setFriends] = useState<any[]>([]); //Interface Friend
  const [cities, setCities] = useState<any[]>([]); //Interface City
  const [recentlyAdded, setRecentlyAdded] = useState<any[]>([]); //Interface Place
  const [searchVisible, setSearchVisible] = useState<Boolean>(false);

  const userInfo: any = useSelector((state: RootState) => state.userInfo);

  return (
    <View style={styles.container}>
      <Text>HELLO FROM HOME COMPONENT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
