import axios from 'axios';
import Config from 'react-native-config';
import noteConfigApi from '../constants/noteApiConstant';
import AsyncStorage from '@react-native-community/async-storage';

export async function createNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.noteAdd,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}
export async function getNotes() {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.get(Config.REACT_APP_BASE_URL + noteConfigApi.getNotes, {
      headers: {
        Authorization: AccessToken,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
}

export async function editNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.editNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function archiveNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.archiveNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function UnArchiveNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.unarchiveNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}
export async function deleteNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.deleteNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function pinNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.pinNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function UnpinNotes(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.UnPinNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function updateColor(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.colorNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function createLabels() {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(Config.REACT_APP_BASE_URL + noteConfigApi.addLabel, {
      headers: {
        Authorization: AccessToken,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
}

export async function deleteForever(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.deleteForever,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function restore(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.restoreNotes,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}

export async function noteCollaborator(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.post(
      Config.REACT_APP_BASE_URL + noteConfigApi.notecollaborator,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}
export async function getAllLabels() {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.get(Config.REACT_APP_BASE_URL + noteConfigApi.getLabels, {
      headers: {
        Authorization: AccessToken,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
}

export async function reminderUpdate(data) {
  try {
    let AccessToken = await AsyncStorage.getItem('@storage_Key');
    let res = axios.get(
      Config.REACT_APP_BASE_URL + noteConfigApi.updateReminder,
      data,
      {
        headers: {
          Authorization: AccessToken,
        },
      },
    );
    return res;
  } catch (err) {
    return err;
  }
}
