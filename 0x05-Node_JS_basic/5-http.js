const http = require('http');
const process = require('process');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    let [file] = process.argv.slice(2);
    file = file || 'nofile';

    countStudents(file).then((value) => {
      res.write('This is the list of our students\n');
      res.end(value);
    })
      .catch((err) => {
        res.write('This is the list of our students\n');
        res.end(err.message);
      });
  }
});

app.listen(1245, 'localhost', () => {
  console.log('server is running...');
});
module.exports = app;
