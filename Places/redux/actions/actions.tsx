export const setUserData = (data: any) => ({
  //need a type for data
  type: 'SET_USER_DATA',
  data,
});

//toggle the  search modal
export const toggleSearchVisible = () => ({
  type: 'TOGGLE_SEARCH',
});

//toggle the place modal
export const togglePlaceVisible = () => ({
  type: 'TOGGLE_PLACE',
});

export const setPlaceSelected = (placeName: string) => ({
  type: 'SET_PLACE',
  placeName,
});

export const saveAccessToken = (token: string) => ({
  type: 'SAVE_ACCESS_TOKEN',
  token,
});

export const saveRefreshToken = (token: string) => ({
  type: 'SAVE_REFRESH_TOKEN',
  token,
});
