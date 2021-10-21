import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ListViewBase,
  Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Friends from '../../screens/Friends';
import Add from '../../screens/Add';
import Profile from '../../screens/Profile';
import UserProfile from '../UserProfile/UserProfile';
import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import Map from '../../screens/Map';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.accentFun,
        tabBarInactiveTintColor: colors.fontDark,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        // tabBarActiveBackgroundColor: colors.backgroundDark,
        tabBarItemStyle: styles.tabBarItem,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/navigation/home.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/navigation/friends.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/navigation/logonav.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/navigation/add.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/navigation/profile.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 90,
    position: 'absolute',
  },

  tabBarItem: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '75%',
    borderRadius: 5,
  },

  tabBarLabelStyle: {
    fontFamily: fonts.semiBold,
    letterSpacing: 0.5,
    marginTop: 0.5,
    flex: 0.5,
  },

  iconStyle: {
    height: 24,
    width: 24,
    // color: accessibilityState.selected ? colors.backgroundLight : colors.backgroundLight
  },
});

export default Tabs;
