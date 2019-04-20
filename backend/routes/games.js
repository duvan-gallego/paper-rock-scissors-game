var express = require('express');
var router = express.Router();
const playerControler = require('../controllers/player.controller');
const gameControler = require('../controllers/game.controller');
const moveControler = require('../controllers/move.controller');

/* Init game */
router.post('/', async function(req, res, next) {

  let error = false;
  let fieldWithError = '';
  if(!req.body.player1) {
    error = true;
    fieldWithError = 'Player 1';
  } else if(!req.body.player2) {
    error = true;
    fieldWithError = 'Player 2';
  }

  if (error) {
    return res.status(400).send({
      success: 'false',
      message: `${fieldWithError} is required`
    });
  }
  let game;
  try {
    let player1 = await playerControler.createPlayer(req.body.player1);
    let player2 = await playerControler.createPlayer(req.body.player2);
    game = await gameControler.createGame(player1, player2);
    game.player1 = player1;
    game.player2 = player2;
  } catch(err) {
    next(err);
  }

  return res.status(200).send({
    success: 'true',
    message: 'Game created successfully',
    game,
  });

});

/* Calculate winner and update game  */
router.put('/', async function(req, res, next) {

  const { gameId, player1Option, player2Option } = req.body;

  let error = false;
  let fieldWithError = '';
  if(!gameId) {
    error = true;
    fieldWithError = 'gameId';
  } else if(!player1Option) {
    error = true;
    fieldWithError = 'player1Option';
  } else if(!player2Option) {
    error = true;
    fieldWithError = 'player2Option';
  }

  if (error) {
    return res.status(400).send({
      success: 'false',
      message: `${fieldWithError} is required`
    });
  }

  let game = {}
  try {
    game = await gameControler.getGame(gameId);
    let moves = await moveControler.fiandAll();

    let winner = 'Tie';
    moves.forEach((move) => {
      if (move._id == player1Option && move.beats.includes(player2Option)) {
        winner = game.player1;
      } else if (move._id == player2Option && move.beats.includes(player1Option)) {
        winner = game.player2;
      }
    });

    game.rounds.push(
      {
        player1Option,
        player2Option,
        winner
      }
    );

    const totalWinnerByPlayer = game.rounds.filter(round => round.winner.toString() == winner);
    if (totalWinnerByPlayer.length >= 2) {
      // The winner is the winner of all the game
      game.winner = winner;
    }
    game = await gameControler.updateGame(game);
    return res.status(200).send({
      success: 'true',
      message: 'Game updated correctly',
      game
    });

  } catch(err) {
    next(err);
  }


});

module.exports = router;
