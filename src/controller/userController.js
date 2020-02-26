import axios from 'react-native-axios'
import configApi from '../config/config'
// require ('dotenv').config()
const baseUrl  = process.env.BASE_URL
export default function register(data){
    return axios.post(baseUrl + 'user/userSignUp',data)
    }

// export  function Login(data){
// return axios.post(baseUrl + 'configApi.Login',data)
// }
