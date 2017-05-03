
const express = require('express');
const api = express.Router();
const users = require('../controllers/users');



api.get('/', users.index);




module.exports = api;
