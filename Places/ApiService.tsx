import { Platform } from 'react-native';

const BASE_URL = 'http://localhost:3001';

const apiService: any = {};

apiService.register = (user: any) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (credentials: any) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//add new place

export default apiService;
