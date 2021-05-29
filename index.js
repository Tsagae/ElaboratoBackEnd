const { query } = require('express');
const express = require('express');
var cors = require('cors');
const app = express();

const menu = require('./routes/menu');
const service2 = require('./routes/service2');
const queryDB = require('./routes/queryDB');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/menu', menu);
app.use('/', service2);
app.use('/queryDB', queryDB);

module.exports = app;
