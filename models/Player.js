const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  college: String,
  metrics: {
    height: Number,
    weight: Number,
    fortyYardDash: Number,
    // Add other metrics as needed
  },
});

module.exports = mongoose.model('Player', playerSchema);
