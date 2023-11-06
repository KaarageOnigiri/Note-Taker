const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api.js');
const homepageRouter = require('./routes/hp.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiRouter);
app.use(homepageRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})