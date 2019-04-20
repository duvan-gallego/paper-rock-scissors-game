const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
  },
  rounds: [
    {
      number: {
        type: Number,
        required: true,
      },
      player1Option: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Moves',
        required: true,
      },
      player2Option: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Moves',
        required: true,
      },
      winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
      },
    }
  ]
},
{
  timestamps: true
}
);


// Export the model
module.exports = mongoose.model('Game', GameSchema);