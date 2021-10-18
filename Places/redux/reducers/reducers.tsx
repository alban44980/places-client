import { combineReducers } from "redux";

//put properties into initial object state
const userInfo = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      const { data } = action;
      return data;
    }
    default:
      return state;
  }
};
//holds current user's friends info
const userFriendInfo = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_USER_FRIEND_DATA": {
      const { frindsInfo } = action;
      return frindsInfo;
    }
    default:
      return state;
  }
};

//searchVisible

const searchVisible = (state = false, action: any) => {
  switch (action.type) {
    case "TOGGLE_SEARCH": {
      return !state;
    }
    default:
      return state;
  }
};

//placevisible

const placeVisible = (state = false, action: any) => {
  switch (action.type) {
    case "TOGGLE_PLACE": {
      return !state;
    }
    default:
      return state;
  }
};

//placeSelected
const placeSelected = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_PLACE": {
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

// access token
const accessToken = (state = "", action: any) => {
  switch (action.type) {
    case "SAVE_ACCESS_TOKEN": {
      const { token } = action;
      return token;
    }
    default:
      return state;
  }
};

//save refresh token
const refreshToken = (state = "", action: any) => {
  switch (action.type) {
    case "SAVE_REFRESH_TOKEN": {
      const { token } = action;
      return token;
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  userInfo,
  searchVisible,
  placeVisible,
  placeSelected,
  accessToken,
  refreshToken,
  userFriendInfo,
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
