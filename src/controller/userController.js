import axios from 'react-native-axios'
import configApi from '../config/config'
// require ('dotenv').config()
const baseUrl  = process.env.BASE_URL
export default function register(data){
    console.warn("register data",data)
    return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
    }
    
export function Login(data){
    console.warn("login data",data)
    return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)

}
export function Fotgot(data){
    console.warn("forgetpassword data",data)
    return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password',data)

}