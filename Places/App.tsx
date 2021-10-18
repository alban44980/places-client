import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reducers, { RootState } from './redux/reducers/reducers';
import { createStackNavigator } from '@react-navigation/stack';

import store from './redux/store/store';
import Home from './screens/Home';
import Navigation from './components/Navigation/Navigation';
import UserProfile from './components/UserProfile/UserProfile';
import SearchModal from './components/SearchModal/SearchModal';
import PlaceModal from './components/PlaceModal/PlaceModal';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const Stack: any = createStackNavigator();

export type RootStackParamList = {
  userProfile: undefined;
  search: undefined;
  place: undefined;
  login: undefined;
  signup: undefined;
  app: undefined;
  home: undefined;
};

export default function App() {
  // const userInfo: any = useSelector((state: RootState) => state.userInfo);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'home'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="home" component={Navigation} />
          <Stack.Screen name="userProfile" component={UserProfile} />
          <Stack.Screen name="search" component={SearchModal} />
          <Stack.Screen name="place" component={PlaceModal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   fontStyle: {
//     color: 'white',
//   },
// });
