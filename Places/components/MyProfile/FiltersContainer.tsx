import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView, 
  View, 
  TouchableOpacity 
} from 'react-native';
import colors from '../../assets/styles/colors';
import { setPlaceSelected } from '../../redux/actions/actions';


export default function FiltersContainer(props: any) {

  const {cities, places, setFilteredPlaces, tagSelected, setTagSelected, filterPlaces } = props



  const handlePress = (city) => {
    if (!tagSelected || tagSelected !== city.name) {
      setTagSelected(city.name)
    }

    if (tagSelected === city.name) {
      setTagSelected('')
    }
  }

  
  return (
    <View style={styles.filterContainer}>
      <ScrollView 
        style={styles.scrollViewVisual}
        contentContainerStyle={styles.scrollViewContainer}
        horizontal={true} 
        bounces={true}
        showsHorizontalScrollIndicator={false}
      >
        {cities.map((city: any) => {
          return (
          <TouchableOpacity 
            style={tagSelected === city.name ? styles.selectedTag : styles.defaultTag} 
            onPress={() => handlePress(city)}
          >
            <Text style={styles.tag}>{city.name}</Text>
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

  selectedTag: {
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

  defaultTag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 70,
    backgroundColor: colors.backgroundLight,
  },

  tag: {
    fontSize: 12
  },
});
