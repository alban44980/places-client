import React from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import colors from '../../assets/styles/colors';



function FilterModal(props: any) {

  const {filterModalVisible, setFilterModalVisible, handlePress} = props
  
  

  return (
    <Modal
      animationType="none" 
      transparent={true} 
      visible={filterModalVisible}
      onRequestClose={() => {
        setFilterModalVisible(!filterModalVisible);
       }}
    >

      <View style={styles.filterModalContainer}>
        <View style={styles.tagsListContainer}>
          {/* map over the array of tags and render views */}
        </View>

       <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            onPress={() => setFilterModalVisible(!filterModalVisible)} 
            style={styles.acceptButton}
          >
            <Text style={styles.acceptButtonText}>Accept 👍</Text>
          </TouchableOpacity>
       </View>

      </View>

    </Modal>
  );
}

export default FilterModal;

const styles = StyleSheet.create({
  filterModalContainer: {
    height: '35%',
    width: '75%',
    backgroundColor: colors.backgroundDark,
    position: 'absolute',
    top: '21%',
    alignSelf: 'center'
  },

  tagsListContainer: {
    height: '80%',
    backgroundColor: colors.backgroundDark
  },

  buttonsContainer: {
    backgroundColor: colors.backgroundLight,
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  acceptButton: {
    width: '100%',
    backgroundColor: colors.accentFun,
    justifyContent: 'center',
  },

  acceptButtonText: {
    textAlign: 'center',
    color: colors.fontLight,
    fontWeight: '600',
    fontSize: 15
  }
  
})