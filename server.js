require('dotenv').config();

const express = require('express');
const path = require('path');

const { PORT = 3000, HOST } = process.env;

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

app.listen(PORT, HOST, err => console.warn(err || `Listening on ${PORT}`));
