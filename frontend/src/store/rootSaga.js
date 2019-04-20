import { all } from 'redux-saga/effects'

import {
  gameWatcher,
  getGameMovesWatcher,
  getWinnerWatcher,
} from '../containers/Playing/sagas';

export default function* Sagas() {
  yield all([
    gameWatcher(),
    getGameMovesWatcher(),
    getWinnerWatcher(),
  ])
}