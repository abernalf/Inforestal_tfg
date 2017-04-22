/**
 * Created by chinegua on 22/4/17.
 */

//SENDEROS

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema

let Sendero = new Schema({
    partida            :   String,
    fin                :   String,
    dificultad         :   String,
    mapa               :   String,
    distancia          :   String,
    duracion           :   String,
    latitud            :   String,
    longitud           :   String
});


module.exports = mongoose.model('Sendero', Sendero);