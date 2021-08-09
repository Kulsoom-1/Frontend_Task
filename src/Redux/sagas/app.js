import {takeLatest, put} from 'redux-saga/effects';
import {ACTION} from '@redux/string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import services from '../../utils/services';
import {setDevices} from '@redux/actions/AppActions';

export function* gettingDevice() {
  yield takeLatest(ACTION.GET_DEVICES, getDevice);
}

export function* gettingUser() {
  yield takeLatest(ACTION.GET_USER, getUser);
}

function* getDevice(params) {
  const result = yield services.get('devices.json');
    if (result.status == 200) {
      setDevices(result);
    } else {
      alert('Try Again');
    }
}

function* getUser(params) {
  const result = yield services.get('users.json');
    if (result.status == 200) {
      setDevices(result);
    } else {
      alert('Try Again');
    }
}
