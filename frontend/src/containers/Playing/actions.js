import {
  INIT_GAME,
  GET_GAME_MOVES,
  CHOOSE_OPTION,
  GET_WINNER,
  RESET_GAME,
} from './constants';

export const initGame = (players) =>  ({
  type: INIT_GAME,
  payload: players
});

export const getGameMoves = () => ({
  type: GET_GAME_MOVES
});

export const chooseOption = (optionSelected, round, firstPlayer) => ({
  type: CHOOSE_OPTION,
  payload: {
    optionSelected,
    round,
    firstPlayer
  }
});

export const getWinner = (gameId, player1Option, player2Option) => ({
  type: GET_WINNER,
  payload: {
    gameId,
    player1Option,
    player2Option,
  }
});

export const resetGame = () => ({
  type: RESET_GAME,
});
