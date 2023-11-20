const mongoose = require('mongoose');

const ChessPlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  ratingHistory: {
    type: [Number], 
    required: true,
  },
})

const ChessPlayerModel = mongoose.model('ChessPlayer', ChessPlayerSchema);

module.exports = { ChessPlayerModel }
