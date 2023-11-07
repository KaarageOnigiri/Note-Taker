const page = require('express').Router();
const path = require('path');

page.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

page.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})


module.exports = page;