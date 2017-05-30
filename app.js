const express = require('express'),
    session = require('express-session');
const app = express();
const path = require('path');
let bodyParser = require('body-parser');

let routes = require('./routes');
let routes_user = require('./routes/user');
let map = require('./routes/map');
const mongo = require('mongoose');
const Users = require('./models/users.js');


mongo.Promise = global.Promise;
mongo.connect("mongodb://localhost/tfg");

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

let auth = function(req, res, next) {
    let aux = 0;
    console.log(req.session);
    Users.findOne({
        'nick': req.session.user
    }, function(err, obj) {
        console.log(obj);
        if ((obj == null) && (req.user == null)) { //Para saber si viene de un login passport
            console.log("No hay user en la session");
            aux = 0;
        } else {
            console.log("Hay user en la session");
            aux = 1;
        }
        if (aux == 0) {
            return res.redirect('/');

        } else {
            console.log("aux =1");
            return next();
        }

    });

};
app.use('/map',auth,map);
app.use('/crud',auth, routes);
app.use('/',routes_user);



app.listen(3000, function() {
    console.log('listening on 3000');
})