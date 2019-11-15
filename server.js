require('dotenv').config();

const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

app.get('/', (req, res) => {
  res.send('TESTING123');
});

app.listen(PORT, HOST, err => console.warn(err || `Listening on ${PORT}`));
