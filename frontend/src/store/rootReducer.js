import { combineReducers } from 'redux';

import game from '../containers/Playing/redux';

const rootReducer = combineReducers({
  game
});

export default rootReducer;