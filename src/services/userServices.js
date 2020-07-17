import axios from 'axios';
import configApi from '../constants/userApiConstants';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';
export default function userRegistration(data) {
  try {
    return axios.post(Config.REACT_APP_BASE_URL + configApi.registration, data);
  } catch (err) {
    return res;
  }
}
export function UserLogin(data) {
  try {
    return axios.post(Config.REACT_APP_BASE_URL + configApi.login, data);
  } catch (err) {
    return err;
  }
}
export function userForgetPassword(data) {
  try {
    return axios.post(
      Config.REACT_APP_BASE_URL + configApi.forgetPassword,
      data,
    );
  } catch (err) {
    throw err;
  }
}

export function userLogOut(data) {
  try {
    return axios.post(Config.REACT_APP_BASE_URL + configApi.signOut, data);
  } catch (err) {
    throw err;
  }
}

export async function uploadProfile() {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(Config.REACT_APP_BASE_URL + configApi.profileUpdate, {
      headers: {
        Authorization: AccessToken,
      },
    });
    return res;
  } 
  catch (err) {
    return err;
  }
}
