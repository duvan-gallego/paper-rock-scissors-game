const Move = require('../models/moves.model');

exports.createMovement = (newMove) => {
  let move = new Move(newMove);
  move.save();
};

exports.fiandAll = () => {
  return Move.find();
};