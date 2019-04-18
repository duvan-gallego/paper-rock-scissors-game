import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './constants';

import getProductsApi from './api';

function* productsWorker(payload) {
  try {
    const data = yield call(getProductsApi, payload.payload);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: { ...data } });
  } catch (e) {
    yield put({ type: FETCH_PRODUCTS_ERROR, payload: e });
  }
}

function* productsWatcher() {
  yield takeLatest(FETCH_PRODUCTS, productsWorker);
}

export default productsWatcher;

