import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from './app';
import auth from './auth';
import root from './root';

const rootReducer = combineReducers({
  app: app,
  auth: auth,
  root: root,
});

export default rootReducer;
