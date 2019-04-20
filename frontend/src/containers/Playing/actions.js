import {
  INIT_GAME
} from './constants';

const initGame = (players) => ({
  type: INIT_GAME,
  payload: players
});

export default initGame;