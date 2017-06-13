/**
 * Created by chinegua on 22/4/17.
 */

//Infantil
let mongoose = require('mongoose');
let Schema = require('mongoose').Schema

let Infantils = new Schema({
    suelo              :   String,
    situacion          :   String,
    nombre             :   String,
    superficie         :   String,
    latitud            :   String,
    longitud           :   String
});



module.exports = mongoose.model('Infantil', Infantils);