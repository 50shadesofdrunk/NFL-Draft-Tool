const mongoose = require('mongoose');

const draftPickSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  round: { type: Number, required: true },
  pickNumber: { type: Number, required: true },
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
});

module.exports = mongoose.model('DraftPick', draftPickSchema);
