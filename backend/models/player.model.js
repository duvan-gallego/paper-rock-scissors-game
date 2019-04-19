const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    unique: true,
  }
},
{
  timestamps: true
}
);


// Export the model
module.exports = mongoose.model('Player', PlayerSchema);