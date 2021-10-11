import { combineReducers } from 'redux';

const userInfo = (state = 'hello from reducer', action: any) => {
  return state;
};

const reducers = combineReducers({
  userInfo,
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
