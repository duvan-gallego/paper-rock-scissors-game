import {
  INIT_GAME,
  INIT_GAME_SUCCESS,
  INIT_GAME_ERROR
} from './constants';

const initialState = {
  player1: '',
  player2: '',
  rounds: [],
  isFetching: false,
  errorMsg: '',
}

export default( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
  case INIT_GAME:
    return {
      ...state.game,
      isFetching: true
    };
  case INIT_GAME_SUCCESS:
    return {
      ...payload,
      isFetching: false
    };
  case INIT_GAME_ERROR:
    return {
      isFetching: false,
      errorMsg: payload
    };
  default:
    return state;
  }
}