import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import {
  setUserData,
  toggleSearchVisible,
  togglePlaceVisible,
  setPlaceSelected,
} from '../../redux/actions/actions';

function CloseButton(props: any) {
  const { handlePress } = props;

  const placeVisible: any = useSelector(
    (state: RootState) => state.placeVisible
  );

  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );

  console.log('searchVisibleForTest ==>', searchVisible);
  const dispatch = useDispatch();

  return (
    <TouchableHighlight
      onPress={() => {
        if (handlePress) {
          handlePress();
        } else {
          dispatch(togglePlaceVisible());
        }
      }}
      style={styles.closeButton}
    >
      <Text style={styles.closeButtonText}>Back Button</Text>
    </TouchableHighlight>
  );
}

export default CloseButton;

const styles = StyleSheet.create({
  closeButton: {
    height: '7%',
    width: '90%',
    backgroundColor: colors.backgroundMedium,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },

  closeButtonText: {
    color: colors.fontLight,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
});
