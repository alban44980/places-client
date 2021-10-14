export const setUserData = (data: any) => ({
  //need a type for data
  type: 'SET_USER_DATA',
  payload: data,
});

export const toggleSearchVisible = () => ({
  type: 'TOGGLE',
});
