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
            fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), (err) => {
                err ? console.error(err) : console.log('New notes added!');
            })
        }
    })

    const response = {
        status: 'success',
        body: newNotes,
    }

    console.log(response);
    res.status(201).json(response);
})

api.delete('/api/notes/:id', (req, res) => {
    if (req.body && req.params.id) {
        console.info(`${req.method} request received to delete a note`);
        let data = fs.readFile('./db/db.json', 'utf8');
        const parsedData = JSON.parse(data);
        const newData = [];
    
        for (let x = 0; x < parsedData.length; x++) {
            if (parsedData[x].id !== req.params.id) {
                newData.push(parsedData[x]);
            }
        }

        fs.writeFile('db/db/json', JSON.stringify(newData));
        res.json("Note deleted");
        console.info(`New Note: ${parsedData}`);
        return;
    }
    res.status(404).json(`ID not found`);
})

module.exports = api;