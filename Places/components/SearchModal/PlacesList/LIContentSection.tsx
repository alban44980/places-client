import React from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import colors from '../../../assets/styles/colors';


function LIContentSection(props: any) {

  const {item} = props

  return (
    <View style={styles.itemContentContainer}>
      <View style={styles.itemHeaderBar}>
        <Text style={styles.headerTextName}>{item.name}</Text>
        <Text style={styles.headerTextCity}>{item.city}</Text>
      </View>
      <View style={styles.itemContentSection}>
        <Text style={styles.descriptionText} numberOfLines={2}>{item.description}</Text>
      </View>
    </View>
  );
}

export default LIContentSection;

const styles = StyleSheet.create({
  itemContentContainer: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  itemHeaderBar: {
    height: '50%',
    backgroundColor: colors.backgroundDark,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  headerTextName: {
    color: colors.fontLight,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 3
  },

  headerTextCity: {
    color: colors.fontLight,
    textAlign: 'center',
    fontSize: 15
  },
  
  itemContentSection: {
    height: '50%',
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  descriptionText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17
  },
})