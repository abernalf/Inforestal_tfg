
const express = require('express');
const api = express.Router();
const users = require('../controllers/users');



api.get('/',users.index);
api.post('/newUser',users.newUser);
api.post('/login',users.login);




module.exports = api;
