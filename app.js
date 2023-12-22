require("dotenv").config();

const express = require('express');
const serverless = require('serverless-http');

const app = express();

const cors = require('cors')

app.use(express.json());

app.use(cors());

module.exports = serverless(app);

require('./controllers/gameController');

app.get('/welcome', (request, result) => {
    result.status(200).send("Welcome not logged in user!");
});



