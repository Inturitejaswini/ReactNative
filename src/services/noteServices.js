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
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.archiveNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function deleteNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to deletecomponent",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.deleteNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function pinUnPinNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to pincomponent",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.pinUnPinNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function updateColor(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to colorcomponent",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.colorNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function createLabels(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    console.warn("token is coming to labelcomponent",AccessToken)
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.addLabel,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

