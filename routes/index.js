
const express = require('express');
const api = express.Router();
const senderos = require('../controllers/senderos');
const parques = require('../controllers/parques');


//-------------------------------------------------Senderos
api.get('/senderos', senderos.index);
api.post('/senderos',senderos.post);
//-------------------------------------------------Parques
api.get('/parques', parques.index);
api.post('/parques',parques.post);



module.exports = api;
