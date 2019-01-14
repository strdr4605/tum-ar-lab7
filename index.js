const express = require('express');
const exec = require('child_process').exec;
const app = express();
const port = 3001;

app.get('/', (req, res) => res.sendFile(__dirname + '/' + 'index.html'));

app.get('/block', (req, res) => {
    exec("ls -la");
    res.sendFile(__dirname + '/' + 'index.html');
});
app.get('/unblock', (req, res) => {
    exec("ls -la");
    res.sendFile(__dirname + '/' + 'index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));