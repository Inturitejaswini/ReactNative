import axios from 'axios'
import Config from 'react-native-config'
import noteConfigApi from '../constants/noteApiConstant'

export default function createNotes(data){
    console.warn("note data",data,"url");
    return axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.noteAdd,data)
    }