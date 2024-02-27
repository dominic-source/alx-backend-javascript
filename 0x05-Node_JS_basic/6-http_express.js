const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
  console.log('server is running');
});
module.exports = app;
