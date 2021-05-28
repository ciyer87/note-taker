const express = require('express');
const app = express();
const { notes } = require('./db/db');
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/notes', (req, res) => {
    res.json(notes);
    console.log(notes);
  });

app.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
