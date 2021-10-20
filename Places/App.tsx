import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reducers, { RootState } from './redux/reducers/reducers';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import store from './redux/store/store';
import Home from './screens/Home';
import Navigation from './components/Navigation/Navigation';
import UserProfile from './components/UserProfile/UserProfile';
import SearchModal from './components/SearchModal/SearchModal';
import PlaceModal from './components/PlaceModal/PlaceModal';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Map from './screens/Map';

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

  let [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'login'}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="home" component={Navigation} />
            <Stack.Screen name="userProfile" component={UserProfile} />
            <Stack.Screen name="search" component={SearchModal} />
            <Stack.Screen name="place" component={PlaceModal} />
            <Stack.Screen name="map" component={Map} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}


