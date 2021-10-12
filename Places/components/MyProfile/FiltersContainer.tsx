import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

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
    <ScrollView
      style={styles.filtersContainer}
      contentContainerStyle={styles.contentContainer}
      horizontal={true}
    >
      {dummyTags.map((tag) => {
        return <Text style={styles.tag}>{tag}</Text>;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filtersContainer: {
    maxHeight: '5%',
    width: '100%',
    marginTop: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    height: '100%',
    borderRadius: 20,
  },
  tag: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 3,
  },
});
