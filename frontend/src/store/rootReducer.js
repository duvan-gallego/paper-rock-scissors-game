import { combineReducers } from 'redux';

import game from '../containers/Home/redux';

const rootReducer = combineReducers({
  game
});

export default rootReducer;