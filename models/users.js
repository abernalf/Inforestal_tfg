
//SENDEROS

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema

let User = new Schema({
    nick            :   String,
    mail            :   String,
    password        :   String,
    status          :   String

});


module.exports = mongoose.model('User', User);