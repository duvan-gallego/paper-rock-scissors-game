import { all } from 'redux-saga/effects'

import contactSaga from '../containers/ContactForm/sagas';
import productsSaga from '../containers/ProductsList/sagas';

export default function* Sagas() {
  yield all([
    contactSaga(),
    productsSaga()
  ])
}