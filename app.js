const express = require ('express');
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config(); // Import dotenv to manage environment variables
const app = express();
const Player = require('./models/Player');

app.use(express.json()); // Middleware for parsing JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/hello', (req, res) => {
  res.send('NFL Draft Tool');
});

// Placeholder routes for player data - these will need to be fully implemented

app.get('/api/v1/players', async (req, res) => {
    try {
      const players = await Player.find();
      res.json(players);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening on ${port}...`));