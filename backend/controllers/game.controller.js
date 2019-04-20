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

exports.getGame = (gameId) => {
  return Game.findOne({ '_id': gameId});
};

exports.updateGame = (game) => {
  return Game.findOneAndUpdate({ '_id': game._id }, game,  {new: true}).populate({ path: 'rounds.winner', model: 'Player'}).populate({ path: 'winner', model: 'Player'});
};