import {
  INIT_GAME,
  INIT_GAME_SUCCESS,
  INIT_GAME_ERROR,
  GET_GAME_MOVES,
  GET_GAME_MOVES_SUCCESS,
  GET_GAME_MOVES_ERROR,
  START_ROUND,
  CHOOSE_OPTION,
} from './constants';

const initialState = {
  player1: {},
  player2: {},
  rounds: [],
  moves: [],
  isFetching: false,
  errorMsg: '',
}

const updateRound = (rounds, payload) => {
  let newRounds = [...rounds];
  newRounds[payload.round -1 ].player2Option = payload.optionSelected;
  return newRounds;
};

export default( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
  case INIT_GAME:
    return {
      ...state,
      isFetching: true
    };
  case INIT_GAME_SUCCESS:
    return {
      ...state,
      ...payload,
      isFetching: false
    };
  case INIT_GAME_ERROR:
    return {
      ...state,
      isFetching: false,
      errorMsg: payload
    };
  case GET_GAME_MOVES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_GAME_MOVES_SUCCESS:
    return {
      ...state,
      moves: [...payload ],
      isFetching: false,
    };
  case GET_GAME_MOVES_ERROR:
    return {
      ...state,
      errorMsg: payload,
      isFetching: false,
    };
  case START_ROUND:
    return {
      ...state,
      rounds: [...state.rounds, { roundNumber : payload }]
    };
  case CHOOSE_OPTION:
    return {
      ...state,
      rounds: payload.firstPlayer
        ? [...state.rounds, { 'player1Option' : payload.optionSelected }]
        : updateRound(state.rounds, payload)
    };
  default:
    return state;
  }
}