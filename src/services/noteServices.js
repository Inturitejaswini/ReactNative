import axios from 'axios'
import Config from 'react-native-config'
import noteConfigApi from '../constants/noteApiConstant'
import AsyncStorage from '@react-native-community/async-storage'

export async function createNotes(data) {
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
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
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.archiveNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function UnArchiveNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.unarchiveNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}
export async function deleteNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.deleteNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function pinNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.pinNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function UnpinNotes(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.UnPinNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function updateColor(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.colorNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function createLabels(){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.addLabel,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}


export async function deleteForever(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.deleteForever,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function restore(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.restoreNotes,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function noteCollaborator(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.post(Config.REACT_APP_BASE_URL+noteConfigApi.notecollaborator,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}
export async function getAllLabels(){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.get(Config.REACT_APP_BASE_URL+noteConfigApi.getLabels,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}

export async function reminderUpdate(data){
    let AccessToken = await AsyncStorage.getItem('@storage_Key')
    let res = axios.get(Config.REACT_APP_BASE_URL+noteConfigApi.updateReminder,data,
        {
            headers: {
                Authorization:AccessToken
            }
        })
    return res
}
