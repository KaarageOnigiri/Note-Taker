const api = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require('fs');
// const { readFile, writeFile } = require('fs/promises');

// get request to /api/notes
api.get('/api/notes', (req, res) => {
    const data = require('../db/db.json');
    res.json(data);

    // res.json(parsedData);
    console.info(`${req.method} request received to look at saved data`)
})

// post request to /api/notes
api.post('/api/notes', (req, res) => {
    const data = require('../db/db.json');
    console.log(data);
    const newData = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    data.push(newData);
    fs.writeFile('./db/db.json', JSON.stringify(data), (e, d) => {
        e ? console.error(e) : console.log('Success! Check your db.json file.');
    });
    res.json(data);
})




module.exports = api;

