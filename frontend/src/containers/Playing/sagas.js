import { call, put, takeLatest } from 'redux-saga/effects';
import {
  INIT_GAME,
  INIT_GAME_SUCCESS,
  INIT_GAME_ERROR
} from './constants';

import initGameApi from './api';

function* homeWorker(payload) {
  try {
    const data = yield call(initGameApi, payload.payload);
    yield put({ type: INIT_GAME_SUCCESS, payload: data.game });
  } catch (e) {
    yield put({ type: INIT_GAME_ERROR, payload: e });
  }
}

function* homeWatcher() {
  yield takeLatest(INIT_GAME, homeWorker);
}

export default homeWatcher;

