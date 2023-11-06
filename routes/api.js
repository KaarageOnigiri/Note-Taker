const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

// get requestto api/notes
api.get('/api/notes', async (req, res) => {
    res.json(`${req.method} request received`);

    const displayHistory = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(displayHistory);

    console.info(req.body);

    console.info(`${req.method} request received`);
})

api.post('/api/notes', (req, res) => {
    const displayHistory = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newFeedBack = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    displayHistory.push(newFeedBack);
    fs.writeFileSync('db')
})