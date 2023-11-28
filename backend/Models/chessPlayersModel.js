const mongoose = require('mongoose');

const ChessPlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  ratingHistory: [{
    type: String,
    required: true,
  }]
   
  
})

const ChessPlayerModel = mongoose.model('ChessPlayer', ChessPlayerSchema);

module.exports = { ChessPlayerModel }
