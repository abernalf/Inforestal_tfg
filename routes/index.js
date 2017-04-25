
const express = require('express');
const api = express.Router();
const mongo = require('mongoose')
const senderos = require('../controllers/senderos');
const parques = require('../controllers/parques');

mongo.Promise = global.Promise;
mongo.connect("mongodb://localhost/tfg");

//-------------------------------------------------Senderos
api.get('/senderos', senderos.index);
api.post('/senderos',senderos.post);
//-------------------------------------------------Parques
api.get('/parques', parques.index);
api.post('/parques',parques.post);

api.get('/prueba',function (req,res) {
    res.render('includes/head')
})

module.exports = api;
