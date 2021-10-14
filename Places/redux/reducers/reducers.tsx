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
    case 'TOGGLE': {
      return !state;
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
