import { all } from 'redux-saga/effects'

import playingSaga from '../containers/Playing/sagas';

export default function* Sagas() {
  yield all([
    playingSaga(),
  ])
}