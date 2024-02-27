const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.listen(1245, () => {

});