import axios from 'axios'
import configApi from '../constants/userApiConstants'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-community/async-storage'
export default function register(data){
    console.warn("register data",data,"url")
    return axios.post(Config.REACT_APP_BASE_URL+configApi.registration,data)
    }
    
export function login(data){
    console.warn("login data",data,"url")
    return axios.post(Config.REACT_APP_BASE_URL+configApi.login,data)

}
export function forget(data){
    console.warn("forgetpassword data",data)
    return axios.post(Config.REACT_APP_BASE_URL+configApi.forgetPassword,data)

}

export function userLogOut(data){
    console.warn("login data",data,"url")
    return axios.post(Config.REACT_APP_BASE_URL+configApi.signOut,data)

}
