const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let [file] = process.argv.slice(2);
  file = file || 'nofile';

  countStudents(file).then((value) => {
    res.send(`<pre>This is the list of our students\n${value}</pre>`);
  })
    .catch((err) => {
      res.send(`<pre>This is the list of our students\n${err.message}</pre>`);
    });
});

app.listen(1245, 'localhost', () => {
  console.log('server is running');
});
module.exports = app;
