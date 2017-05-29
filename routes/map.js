const express = require('express');
const api = express.Router();
const map = require('../controllers/map');


//-------------------------------------------------Senderos
api.get('/index', map.index);




module.exports = api;
/**
 * Created by chinegua on 29/5/17.
 */
