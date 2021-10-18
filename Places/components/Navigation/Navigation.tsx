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




const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.fontLight,
        tabBarInactiveTintColor: colors.fontDark,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveBackgroundColor: colors.backgroundDark,
        tabBarItemStyle: styles.tabBarItem,
        tabBarShowLabel: false
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
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/navigation/plus.png')}
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
                source={require('../../assets/navigation/robot.png')}
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
    backgroundColor: colors.backgroundMedium, 
    height: 60, 
    position: 'absolute',
    width: '90%',
    bottom: 20, 
    right: 20,
    left: 20,
    borderRadius: 20,  
    borderWidth: 1, 
    borderStyle: 'solid',
  },

  tabBarItem: {
    // borderWidth: 1, 
    // borderStyle: 'solid', 
    // flex: 1,
    height: 60,    
    alignItems: 'center', 
    justifyContent: 'center',
  },

  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '75%',
    height: '75%',
    borderRadius: 5
  },

  tabBarLabelStyle: {
    fontFamily: fonts.light,
    letterSpacing: .5,
    marginTop: 2,
    flex: 1,
  },


  iconStyle: {
    height: 24,
    width: 24,
    // color: accessibilityState.selected ? colors.backgroundDark : colors.backgroundLight
  }
});

export default Tabs;
