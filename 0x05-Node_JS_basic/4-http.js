const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
});
module.exports = app;
