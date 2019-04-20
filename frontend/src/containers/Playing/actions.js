import {
  INIT_GAME,
  GET_GAME_MOVES,
  CHOOSE_OPTION,
  START_ROUND,
} from './constants';

export const initGame = (players) =>  ({
  type: INIT_GAME,
  payload: players
});

export const getGameMoves = () => ({
  type: GET_GAME_MOVES
});

export const startRound = (round) => ({
  type: START_ROUND,
  payload: {
    round
  }
});

export const chooseOption = (optionSelected, round, firstPlayer) => ({
  type: CHOOSE_OPTION,
  payload: {
    optionSelected,
    round,
    firstPlayer
  }
});
