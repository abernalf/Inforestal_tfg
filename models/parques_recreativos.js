/**
 * Created by chinegua on 24/4/17.
 */

//Parques

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema

let Parques = new Schema({
    nombre           :   String,
    isla             :   String,
    municipio        :   String,
    acceso           :   String,
    transporte       :   String,
    contacto         :   String,
    permiso          :   String,
    superficie       :   String,
    minusvalido      :   String,
    agua             :   String,
    electricidad     :   String,
    duchas           :   String,
    bar              :   String,
    comedor          :   String,
    fogones          :   String,
    bancos           :   String,
    aparcamientos    :   String,
    latitud          :   String,
    longitud         :   String
});


module.exports = mongoose.model('Parques', Parques);