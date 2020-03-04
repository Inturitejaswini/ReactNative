import axios from 'axios'
import configApi from '../constants/userApiConstants'
import Config from 'react-native-config'

export default function register(data){
    console.warn("register data",data,"url")
    return axios.post(Config.REACT_APP_BASE_URL+configApi.registration,data)
    }
    
export function Login(data){
    console.warn("login data",data,"url")
    return axios.post(Config.REACT_APP_BASE_URL+configApi.login,data)

}
export function Fotget(data){
    console.warn("forgetpassword data",data)
    return axios.post(Config.REACT_APP_BASE_URL+configApi.forgetPassword,data)

}