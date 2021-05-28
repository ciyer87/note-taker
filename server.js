const express = require('express');
const app = express();
const { notes } = require('./db/db.json');
const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
