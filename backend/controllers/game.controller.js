const Game = require('../models/game.model');

exports.createGame = async (player1, player2) => {
  let game = new Game(
    {
        player1: player1._id,
        player2: player2._id,
        startTime: new Date()
    }
  );
  return game.save();
}
