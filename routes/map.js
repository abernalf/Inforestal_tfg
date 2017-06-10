const express = require('express');
const api = express.Router();
const map = require('../controllers/map');


//-------------------------------------------------Senderos
api.get('/index', map.index);
api.get('/senderos', map.senderos);


module.exports = api;

