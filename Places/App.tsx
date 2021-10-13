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

const Stack: any = createStackNavigator();

export default function App() {
  // const userInfo: any = useSelector((state: RootState) => state.userInfo);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'app'}>
          <Stack.Screen name="userProfile" component={UserProfile} />
          <Stack.Screen name="app" component={Navigation} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <Navigation /> */}
      {/* <Stack.Navigator>
          <Stack.Screen component={UserProfile} name="userProfile" />
        </Stack.Navigator> */}
      {/* </NavigationContainer> */}
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
