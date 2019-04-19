const Player = require('../models/player.model');

exports.createPlayer = (playerName) => {

  return Player.findOne({ name: playerName }).then(user => {
    if (user) {
      return new Promise(resolve => resolve(user));
    } else {
      let player = new Player(
        {
            name: playerName
        }
      );
      return player.save();
    }
  })
}