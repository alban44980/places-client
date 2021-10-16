import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers/reducers";
const BASE_URL = "http://localhost:3001";

const accessToken = useSelector((state: RootState) => state.accessToken);
const refreshToken = useSelector((state: RootState) => state.refreshToken);

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
    .catch((err: any) => console.log(err));
};

/**
 * addFriend expected input
{
    "FriendId":"8ad5a9fa-aa13-4f72-9bb6-0af1445be1bc"
}
 */
const addFriend = (friendId: any) => {
  return fetch(`${BASE_URL}/add/friend`, {
    method: "POST",
    headers: { "Content-Type": "application/json",`Bearer ${accessToken}` },
  });
};

export default { register, login };
