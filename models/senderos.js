/**
 * Created by chinegua on 22/4/17.
 */

//SENDEROS
var Schema = require('mongoose').Schema

var producto_schema = new Schema({
    partida            :   String,
    fin                :   String,
    dificultad         :   String,
    mapa               :   String,
    distancia          :   String,
    duracion           :   String,
    latitud            :   String,
    longitud           :   String
})

module.exports = producto_schema