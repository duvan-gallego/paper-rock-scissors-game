var express = require('express');
var router = express.Router();
const playerControler = require('../controllers/player.controller');
const gameControler = require('../controllers/game.controller');

/* POST game */
/*router.post('/', function(req, res) {

  console.log('*****************');
  console.log(req.body);

  /*let error = false;
  let fieldWithError = '';
  if(!req.body.firstName) {
    error = true;
    fieldWithError = 'First name';
  } else if(!req.body.lastName) {
    error = true;
    fieldWithError = 'Last name';
  } else if(!req.body.email) {
    // TODO: Validate that the email format is valid
    error = true;
    fieldWithError = 'Email';
  } else if(!req.body.subject) {
    error = true;
    fieldWithError = 'Subject';
  }

  if (error) {
    return res.status(400).send({
      success: 'false',
      message: `${fieldWithError} is required`
    });
  }*/


  /*return res.status(200).send({
    success: 'true',
    message: 'Game created successfully'
  })
});*/

// router.post('/', player_controller.create_player);

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
