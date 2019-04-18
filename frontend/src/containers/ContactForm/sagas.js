import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SEND_CONTACT,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT_ERROR
} from './constants';

import contactApi from './api';

function* contactWorker(payload) {
  try {
    const data = yield call(contactApi, payload.payload);
    yield put({ type: SEND_CONTACT_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: SEND_CONTACT_ERROR, payload: e });
  }
}

function* contactWatcher() {
  yield takeLatest(SEND_CONTACT, contactWorker);
}

export default contactWatcher;

