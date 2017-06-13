const express = require('express');
const api = express.Router();
const map = require('../controllers/map');


//-------------------------------------------------Senderos
api.get('/index', map.index);
api.get('/senderos', map.senderos);
api.get('/parquesRecreativos',map.parquesRecreativos);
api.get('/:id',map.content);


module.exports = api;

