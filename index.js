const express = require('express');
const app = express();

const menu = require('./routes/menu');
const service2 = require('./routes/service2');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/menu', menu);
app.use('/service2', service2);

module.exports = app;
