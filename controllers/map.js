/**
 * Created by chinegua on 29/5/17.
 */
const Senderos = require('../models/senderos.js');
exports.index = function (req, res) {

    Senderos.find({},function(err,senderos){
        console.log(senderos);
        res.render('map.ejs',{senderos_: senderos})
    });
};

exports.senderos = function (req, res) {

    Senderos.find({},function(err,senderos){
        console.log(senderos);
        res.render('senderos.ejs',{senderos_: senderos})
    });
};