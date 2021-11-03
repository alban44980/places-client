import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';

import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import TagsFilter from './TagsFilter';

function FilterModal(props: any) {
  const {
    filterModalVisible,
    setFilterModalVisible,
    setTagsSelected,
    tagsSelected,
  } = props;

  const [selected, setSelected] = useState<String[]>(tagsSelected);

  useEffect(() => {
    if (setTagsSelected) setTagsSelected(selected);
  }, [selected]);

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
        <View style={styles.modalHeaderContainer}>
          <Text style={styles.headerText}>Select Tags</Text>
        </View>

        <View style={styles.tagsListContainer}>
          <TagsFilter selected={selected} setSelected={setSelected} />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setFilterModalVisible(!filterModalVisible)}
            style={styles.acceptButton}
          >
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default FilterModal;

const styles = StyleSheet.create({
  filterModalContainer: {
    height: '50%',
    width: '80%',
    backgroundColor: colors.backgroundLight,
    position: 'absolute',
    top: '21%',
    alignSelf: 'center',
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'center',
  },

  modalHeaderContainer: {
    height: '15%',
    width: '100%',
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 22,
    fontFamily: fonts.semiBold,
    color: colors.fontDark,
  },

  tagsListContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: colors.backgroundLight,
  },

  buttonsContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderTopWidth: 0.5,
  },

  acceptButton: {
    justifyContent: 'center',
    height: '60%',
    width: '40%',
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.buttonDefault,
  },

  acceptButtonText: {
    textAlign: 'center',
    color: colors.fontLight,
    fontFamily: fonts.medium,
    fontSize: 15,
  },
});
