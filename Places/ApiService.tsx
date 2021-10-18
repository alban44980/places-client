import {
  FriendSchema,
  OtherUserIndoSchema,
  PlaceSchema,
  RemovePlaceSchema,
  SearchUserSchema,
} from "./Interfaces";
import { PATHIP } from "@env";

const path = PATHIP;

const BASE_URL = `http://${path}:3001`;
console.log(BASE_URL);
/*
register expected input
{
    "user_name": "test4UN",
    "first_name": "test4FN",
    "last_name": "test4LN",
    "password": "test4PWLong",
    "passwordConfirmation": "test4PWLong",
    "bio": "test4BIO",
    "email": "test4EM@EM.com"
}
*/
const register = (user: any) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

/*
login expected input
{
    "email":"test4EM@EM.com",
    "password": "test4PWLong"
}
*/
const login = (credentials: any) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log("poop", err));
};

/**
  addFriend expected input
{
    "FriendId":"8ad5a9fa-aa13-4f72-9bb6-0af1445be1bc"
}
 */
const addFriend = (
  friendId: FriendSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/add/friend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(friendId),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

/*
addPlace expected input 
{
    "name": "Candy's",
    "description" :"great place for drinks",
    "tag_list": [{"tag_name": "Bar"},{"tag_name": "Sport"}],
    "img": "https://13144adksfjhafakjfhjkhfa.com",
    "location": "{lat:131313,lng:1313134}",
    "address": "134avc 53st, barc, MW, 33193",
    "city":"Lagos",
    "city_info": {"name":"Lagos","country":"Japan","location":"{lat:131313,lng:1313134}"},
    "country": "Japan"
}
 */
const addPlace = (
  newPlace: PlaceSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/add/place`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(newPlace),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

/*
addSavedPlace expected input
{
    "name": "Candy's",
    "description" :"great place for drinks",
    "tag_list": [{"tag_name": "Bar"},{"tag_name": "Sport"}],
    "img": "https://13144adksfjhafakjfhjkhfa.com",
    "location": "{lat:131313,lng:1313134}",
    "address": "134avc 53st, barc, MW, 33193",
    "city":"Lagos",
    "country": "Japan"
}
*/
const addSavedPlace = (
  newSavedPlace: PlaceSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/add/savedplace`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(newSavedPlace),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

/*
searchUser expected input
{
    "searchValue":"test2UN"
}
*/
const searchUser = (
  searchValue: SearchUserSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/searched/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(searchValue),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const getOtherUserInfo = (
  userId: OtherUserIndoSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/searched/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(userId),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const getFriends = (
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/my/friends`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const getFriendsCitesPlace = (
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/friendsCitiesPlaces`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const getSavedPlaces = (
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/my/savedplaces`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const getMyPlaces = (
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/my/places`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const getMyCityPlaces = (
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/my/citiesPlaces`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const logout = (refreshToken: string, accessToken: string): Promise<any> => {
  return fetch(`${BASE_URL}/logout`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const removeFriend = (
  friendId: FriendSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/remove/friend`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(friendId),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

const removeMyPlace = (
  placeInfo: RemovePlaceSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/remove/myplace`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(placeInfo),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};
const removeSavedPlace = (
  placeInfo: RemovePlaceSchema,
  refreshToken: string,
  accessToken: string
): Promise<any> => {
  return fetch(`${BASE_URL}/remove/myplace`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `${refreshToken}`,
    },
    body: JSON.stringify(placeInfo),
  })
    .then((res) => res.json())
    .catch((err: any) => console.log(err));
};

export default {
  register,
  login,
  addFriend,
  addPlace,
  addSavedPlace,
  searchUser,
  getOtherUserInfo,
  getFriends,
  getFriendsCitesPlace,
  getSavedPlaces,
  getMyPlaces,
  getMyCityPlaces,
  logout,
  removeFriend,
  removeMyPlace,
  removeSavedPlace,
};
