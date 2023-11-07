const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api.js');
const pageRouter = require('./routes/html.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
app.use(pageRouter);
app.use(apiRouter);

app.get('*', (req, res) => {
    res.send('Sorry, the page you are trying to reach is non-existent.');
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})

