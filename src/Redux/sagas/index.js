import {fork, all} from 'redux-saga/effects';
import {gettingDevice} from './app';

export function* rootSaga() {
  yield all([
    gettingDevice(),
  ])
}
