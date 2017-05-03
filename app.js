const express = require('express');
const app = express();
const path = require('path');
let bodyParser = require('body-parser');

let routes = require('./routes');
let routes_user = require('./routes/user');
const mongo = require('mongoose')

mongo.Promise = global.Promise;
mongo.connect("mongodb://localhost/tfg");

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/crud', routes);
app.use('/',routes_user);



app.listen(3002, function() {
    console.log('listening on 3000');
})