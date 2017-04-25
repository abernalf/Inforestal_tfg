const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

let routes = require('./routes');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/crud', routes);




app.listen(3002, function() {
    console.log('listening on 3000');
})