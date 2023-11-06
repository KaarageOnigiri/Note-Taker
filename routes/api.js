const api = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require ('fs');

// get request to api/notes
api.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.json(data);
        console.log(data);
    })
    // const displayHistory = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    // res.json(displayHistory);

    // console.info(req.body);

    console.info(`${req.method} request received`);
})

api.post('/api/notes', (req, res) => {
    const displayHistory = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNotes = {
        title,
        text,
        id: uuid(),
    }

    // obtain existing reviews
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            const parsedNotes = JSON.parse(data);

            // add new note
            parsedNotes.push(newNotes);

            // write new notes to the file
            fs.writeFile('./db/db.json', )
        }
    })

    displayHistory.push(newNotes);
    fs.writeFile('db/db.json', JSON.stringify(displayHistory));
    console.log(displayHistory);
    res.json(displayHistory);
})

api.delete('/api/notes/:id', (req, res) => {
    let 
})