import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView, 
  View, 
  TouchableOpacity 
} from 'react-native';
import colors from '../../assets/styles/colors';

const dummyTags = [
  'Nantes',
  'Philly',
  'London',
  'Bournemouth',
  'Manchester',
  'Oslo',
  'Bogota',
  'Havana',
  'Miami',
  'Melbourne',
];

export default function FiltersContainer() {
  return (
    <View style={styles.filterContainer}>
      <ScrollView 
        style={styles.scrollViewVisual}
        contentContainerStyle={styles.scrollViewContainer}
        horizontal={true} 
        bounces={true}
        showsHorizontalScrollIndicator={false}
      >
        {dummyTags.map((tag) => {
          return (
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.tag}>{tag}</Text>
          </TouchableOpacity>
          )}
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  filterContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },

  scrollViewVisual: {
    backgroundColor: colors.backgroundLight,

    paddingHorizontal: 20
  },

  scrollViewContainer: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 70,
    backgroundColor: colors.accentFun
  },

  tag: {
    fontSize: 12
  },
});
