import { all } from 'redux-saga/effects'

import { gameWatcher, getGameMovesWatcher } from '../containers/Playing/sagas';

export default function* Sagas() {
  yield all([
    gameWatcher(),
    getGameMovesWatcher(),
  ])
}