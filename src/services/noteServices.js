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

export async function editNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to editcomponent",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.editNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function archiveNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to archivecomponent",AccessToken)
    let res = axios.get(Config.REACT_APP_BASE_URL+noteConfigApi.archiveNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function deleteNotes(){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to deletecomponent",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.deleteNotes,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}