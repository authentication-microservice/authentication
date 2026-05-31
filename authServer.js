const express = require('express');

const app = express();

const db = require('./database');

app.use(express.json());

app.listen(8080, () => {
    console.log('Authentication service running on port 8080');
});