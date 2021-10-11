import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import reducers, { RootState } from './redux/reducers/reducers';
import store from './redux/store/store';
import Home from './screens/Home';

export default function App() {
  // const userInfo: any = useSelector((state: RootState) => state.userInfo);

  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fontStyle: {
    color: 'white',
  },
});
