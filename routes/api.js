const api = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require('fs');

// get request to /api/notes
api.get('/notes', async (req, res) => {
    const data = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(data);

    // res.json(parsedData);
    console.info(`${req.method} request received to look at saved data`)
})

// post request to /api/notes
api.post('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    console.log(data);
    const newData = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    data.push(newData);
    fs.writeFile('./db/db.json', JSON.stringify(data), (e) => {
        e ? console.error(e) : console.log('Success! Check your db.json file!');
    });
    res.json(data);
})

api.delete('/notes/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    if (req.body && req.params.id) {
        console.log(`${req.method} request received to delete a note`);
        const newData = [];

        for (let x = 0; x < data.length; x++) {
            if (data[x].id !== req.params.id) {
                newData.push(data[x]);
            }
        }
        fs.writeFile('./db/db.json', JSON.stringify(newData), (e) => {
            e ? console.error(e) : console.log('New Notes Updated (After Deletion)!');
        });
        res.json('Note deleted');
        console.log(`New Notes: ${data}`);
        return;
    }
    res.status(404).json(`ID not found`);
})

module.exports = api;