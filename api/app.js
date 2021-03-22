const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const generateRouter = require('./routes/generate');
const fileRouter = require('./routes/file-download');

global.__basedir = __dirname;
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(generateRouter);
app.use(fileRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
