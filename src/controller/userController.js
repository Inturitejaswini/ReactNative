import axios from 'react-native-axios'
import configApi from '../config/config'
// require ('dotenv').config()
const baseUrl  = process.env.BASE_URL
export default function register(data){
    console.warn("",data)
    return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
    }
