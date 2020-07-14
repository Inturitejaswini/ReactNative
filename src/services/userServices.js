import axios from 'axios';
import configApi from '../constants/userApiConstants';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';
export default function register(data) {
  return axios.post(Config.REACT_APP_BASE_URL + configApi.registration, data);
}

export function UserLogin(data) {
  return axios.post(Config.REACT_APP_BASE_URL + configApi.login, data);
}
export function forget(data) {
  return axios.post(Config.REACT_APP_BASE_URL + configApi.forgetPassword, data);
}

export function userLogOut(data) {
  return axios.post(Config.REACT_APP_BASE_URL + configApi.signOut, data);
}

export async function uploadProfile() {
  let AccessToken = await AsyncStorage.getItem('@storage_Key');
  let res = axios.post(Config.REACT_APP_BASE_URL + configApi.profileUpdate, {
    headers: {
      Authorization: AccessToken,
    },
  });
  return res;
}
