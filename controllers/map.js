/**
 * Created by chinegua on 29/5/17.
 */
var ObjectId = require('mongodb').ObjectID;

const Senderos = require('../models/senderos.js');
const ParquesRecreativos = require('../models/parques_recreativos.js');
const Infantil = require('../models/infantil.js');
const Comentarios = require('../models/comentarios.js');
const User = require('../models/users.js');
const Sendero = require('../models/senderos.js');


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
    console.log("Parametro a filtrar");

    console.log(req.params.id);
    ParquesRecreativos.findOne({ _id: req.params.id},function(err,parquesRecreativos){
        if(parquesRecreativos == null){
            Senderos.findOne({_id: req.params.id},function(err,senderos){
                Comentarios.find({ 'sendero' : ObjectId(req.params.id)},function(err,comentarios) {
                    User.populate(comentarios,{path:'autor'},function(err, comentarios) {
                        Sendero.populate(comentarios,{path:'sendero'},function(err, comentarios) {
                            console.log("y devuelve este objeto");
                            console.log(comentarios);
                            res.render("edit", {senderos_: senderos,  comentarios_ : comentarios,parquesRecreativos_: null, parquesInfantiles_: null})
                        });
                    })
                })
            })
        }
        else{
            res.send("Parque")
        }
    });
};

// exports.gcomentarios = function (req, res) {
//
//     Comentarios.find({},function(err,obj){
//         User.populate(obj,{path:'autor'},function(err, libros){
//             console.log(libros);
//             res.send(libros);
//         });
//     });
// };

exports.pcomentarios = function (req, res) {

    let data = {
        autor            :   '' + req.session.user + '',
        sendero          :   '' + req.body.id + '',
        comentario       :   '' + req.body.comentario + '',


    };
    console.log("data");
    console.log(req.session.name);


    let comentario = new Comentarios(data);

    comentario.save(function(err){
        console.log(err);
        res.send('Comentario añadido correctamente')
    });
};

