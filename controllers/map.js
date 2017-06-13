/**
 * Created by chinegua on 29/5/17.
 */
const Senderos = require('../models/senderos.js');
const ParquesRecreativos = require('../models/parques_recreativos.js');
const Infantil = require('../models/infantil.js');


exports.index = function (req, res) {
    ParquesRecreativos.find({},function(req,parquesRecreativos){
        Senderos.find({},function(err,senderos){
            Infantil.find({},function(err,infantil){

                res.render('map.ejs',{senderos_: senderos,parquesRecreativos_:parquesRecreativos,infantil_:infantil})
    })})});
};

exports.senderos = function (req, res) {

    Senderos.find({},function(err,senderos){
        console.log(senderos);
        res.render('senderos.ejs',{senderos_: senderos})
    });
};

exports.parquesRecreativos = function (req, res) {

    ParquesRecreativos.find({},function(err,parquesRecreativos){
        console.log(parquesRecreativos);
        res.render('parques.ejs',{parquesRecreativos_: parquesRecreativos})
    });
};

exports.content = function (req, res) {

    ParquesRecreativos.findOne({ _id: req.params.id},function(err,obj){
        if(obj == null){
            Senderos.findOne({},function(err,obj){
                console.log(obj);
                res.render("edit",{senderos_ : obj, parquesRecreativos_ : null});
            })
        }
        else{
            res.send("Parque")
        }
    });
};