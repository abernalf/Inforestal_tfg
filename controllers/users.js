/**
 * Created by chinegua on 22/4/17.
 */
const Users = require('../models/users.js');

exports.index = function (req, res) {
    res.render('index.ejs')

}

exports.register = function (req, res) {

    let data = {
        nick           :   ''+req.body.nick+'',
        password       :   ''+req.body.password+'',
        mail           :   ''+req.body.mail+'',

    };

    let user = new Users(data);

    user.save(function(err){
        console.log(err);
        res.send('Cuenta creada correctamente')
    });

}