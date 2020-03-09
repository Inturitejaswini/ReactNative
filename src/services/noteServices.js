import axios from 'axios'
import Config from 'react-native-config'
import noteConfigApi from '../constants/noteApiConstant'
import AsyncStorage from '@react-native-community/async-storage'

export async function createNotes(data) {
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL + noteConfigApi.noteAdd, data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}
export async function getNotes(){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming",AccessToken)
    let res = axios.get(Config.REACT_APP_BASE_URL + noteConfigApi.getNotes,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function editNotes(){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL + noteConfigApi.editNotes,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}
