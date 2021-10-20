import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView, 
  View, 
  TouchableOpacity 
} from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
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
            <Text style={tagSelected === city.name ? styles.selectedTagLabel : styles.defaultTagLabel}>{city.name}</Text>
          </TouchableOpacity>
          )}
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  filterContainer: {
    height: '6%',
    width: '85%',
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderStyle: 'solid',
  },

  scrollViewVisual: {
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 0
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
    height: '60%',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    minWidth: 70,
    backgroundColor: colors.backgroundDark
  },

  defaultTag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    minWidth: 70,
    backgroundColor: colors.backgroundLight,
  },

  defaultTagLabel: {
    fontSize: 10,
    fontFamily: fonts.medium
  },

  selectedTagLabel: {
    fontSize: 10,
    fontFamily: fonts.medium,
    color: colors.fontLight
  },
});
