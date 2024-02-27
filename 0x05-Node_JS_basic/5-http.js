const http = require('http');
const process = require('process');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const file = process.argv[2];
    countStudents(file).then(() => {
      res.write('This is the list of our students\n');
      res.end();
    })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.listen(1245, 'localhost', () => {
});
module.exports = app;
