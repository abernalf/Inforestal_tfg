

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema
let autor = require('./users');
let sendero = require('./senderos');
let parques_recreativos = require('./parques_recreativos');
let infantil = require('./infantil');

let Comentario = new Schema({
    autor            :   { type: Schema.ObjectId, ref: "autor" } ,
    sendero          :   { type: Schema.ObjectId, ref: "sendero" } ,
    comentario       :   { type: String, minlength: 20, maxlength: 200 },
    fecha            :   { type: Date, default: Date.now },
    votos            :   { type: Number, default: 0 }
});


module.exports = mongoose.model('Comentarios', Comentario);