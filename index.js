const express = require('express');
const app = express();

const menu = require('./routes/menu');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/menu', menu);

module.exports = app;
