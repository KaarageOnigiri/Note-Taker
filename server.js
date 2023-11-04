const express = require('express');
const path = require('path');
// api here?
// middleware here?

const PORT = 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('*', (req, res) => {
    res.send('Sorry, the page you are trying to reach is non-existent.');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})