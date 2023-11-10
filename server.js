const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api.js');
const pageRouter = require('./routes/html.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/', pageRouter);


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})

