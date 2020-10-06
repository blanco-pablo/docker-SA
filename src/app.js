const express = require('express');
const app = express();
const morgan = require('morgan');
const route = require('./routes/index');

app.use(morgan('dev'));
app.use(route);

module.exports = app;