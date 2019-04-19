import { all } from 'redux-saga/effects'

import homeSaga from '../containers/Home/sagas';

export default function* Sagas() {
  yield all([
    homeSaga(),
  ])
}