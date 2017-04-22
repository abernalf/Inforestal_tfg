
const express = require('express');
const api = express.Router();

const Controllers = require('../controllers/senderos')

api.get('/', Controllers.index);

module.exports = api;