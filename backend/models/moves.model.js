const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovesSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    unique: true,
  },
  beats: []
},
{
  timestamps: true
}
);

// Export the model
module.exports = mongoose.model('Moves', MovesSchema);