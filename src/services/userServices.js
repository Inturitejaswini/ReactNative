import axios from 'axios'
import configApi from '../constants/userApiConstants'
import Config from 'react-native-config'
// require ('dotenv').config()
// const baseUrl  = process.env.BASE_URL

export default function register(data){
    console.warn("register data",data,"url",Config.BASE_URL+configApi.registration)
    return axios.post(Config.REACT_APP_BASE_URL+configApi.registration,data)
    }
    
export function Login(data){
    console.warn("login data",data,"url",Config.BASE_URL+configApi.login)
    return axios.post(Config.REACT_APP_BASE_URL+configApi.login,data)

}
export function Fotget(data){
    console.warn("forgetpassword data",data,Config.BASE_URL+configApi.forgetPassword)
    return axios.post(Config.REACT_APP_BASE_URL+configApi.forgetPassword,data)

}