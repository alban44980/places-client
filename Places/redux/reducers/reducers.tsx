import { combineReducers } from 'redux';

//put properties into initial object state
const userInfo = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_USER_DATA': {
      const { data } = action;
      return data;
    }
    default:
      return state;
  }
};

//searchVisible

const searchVisible = (state = false, action: any) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH': {
      return !state;
    }
    default:
      return state;
  }
};

//placevisible

const placeVisible = (state = false, action: any) => {
  switch (action.type) {
    case 'TOGGLE_PLACE': {
      return !state;
    }
    default:
      return state;
  }
};

//placeSelected
const placeSelected = (state = '', action: any) => {
  switch (action.type) {
    case 'SET_PLACE': {
      const { placeName } = action;
      return placeName;
    }
    default:
      return state;
  }
};

//setFriends

//setCities

//setPlaces

const reducers = combineReducers({
  userInfo,
  searchVisible,
  placeVisible,
  placeSelected,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;

/*
UserInfo: Reducer
UserCities: Reducer
UserPlaces: Reducer
AllFriends: Reducer
AllFriendsPlaces: Reducer
AllFriendsCities: Reducer
loggedUser
Tags
*/
