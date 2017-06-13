
const express = require('express');
const api = express.Router();
const senderos = require('../controllers/senderos');
const parques = require('../controllers/parques');
const infantil = require('../controllers/infantil');

//-------------------------------------------------Senderos
api.get('/senderos', senderos.index);
api.post('/senderos',senderos.post);
//-------------------------------------------------Parques
api.get('/parques', parques.index);
api.post('/parques',parques.post);

api.get('/infantil', infantil.index);
api.post('/infantil',infantil.post);



module.exports = api;
