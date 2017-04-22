
const express = require('express');
const api = express.Router();
const mongo = require('mongoose')
const Controllers = require('../controllers/senderos');

mongo.Promise = global.Promise;
mongo.connect("mongodb://localhost/tfg");

api.get('/crud', Controllers.index);
api.post('/crud',Controllers.post)

module.exports = api;
