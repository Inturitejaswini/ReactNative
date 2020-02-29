import axios from 'axios'
import configApi from '../constants/userApiConstants'
import Config from 'react-native-config'
// require ('dotenv').config()
// const baseUrl  = process.env.BASE_URL

export default function register(data){
    console.warn("register data",data,"url",Config.BASE_URL+configApi.registration)
    return axios.post(Config.BASE_URL+configApi.registration,data)
    }
    
export function Login(data){
    console.warn("login data",data)
    return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)

}
export function Fotget(data){
    console.warn("forgetpassword data",data)
    return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password',data)

}