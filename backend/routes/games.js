var express = require('express');
var router = express.Router();
const playerControler = require('../controllers/player.controller');
const gameControler = require('../controllers/game.controller');

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
  })

});

module.exports = router;
