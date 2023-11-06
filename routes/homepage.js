const hp = require('express').Router();
const path = require('path');

// get request to homepage
hp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

// get request to notes.html page
hp.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// get request to non existent page
hp.get('*', (req, res) => {
    res.send('Sorry, the page you are trying to reach is non-existent.');
})

module.exports = hp;