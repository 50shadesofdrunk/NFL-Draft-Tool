const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  college: String,
  metrics: {
    year: Number,
    height: Number,
    weight: Number,
    fortyYardDash: Number,
    draftPick: Number,

  
  },
});

module.exports = mongoose.model('Player', playerSchema);
