
//SENDEROS

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema

let User = new Schema({
    nick            :   String,
    mail            :   String,
    password        :   String,
    status          :   { type: String, default: '0' }

});


module.exports = mongoose.model('User', User);