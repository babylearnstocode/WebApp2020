const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/beitragRoutes');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
//MIDDLEWARE

app.use(morgan('dev'));

app.use(express.json()); //parse data from body

// 3) Routes
app.use('/api/v1/beitrag', routes);

module.exports = app;
