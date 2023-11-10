const page = require('express').Router();
const path = require('path');


page.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

page.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})


module.exports = page;