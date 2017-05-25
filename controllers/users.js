/**
 * Created by chinegua on 22/4/17.
 */
const bcrypt = require('bcrypt-nodejs');
const Users = require('../models/users.js');

exports.index = function (req, res) {
    res.render('index.ejs')

}

exports.newUser = function (req, res) {
    let hash = bcrypt.hashSync(req.body.password);
    let data = {
        nick           :   ''+req.body.name+'',
        password       :   ''+hash+'',
        mail           :   ''+req.body.email+'',

    };

    let user = new Users(data);

    user.save(function(err){
        console.log(err);
        res.send('Cuenta creada correctamente')
    });

};
exports.login = function(req,res){



    Users.findOne({ 'nick': req.body.name},function(err,obj) {
        console.log(obj);

        if(bcrypt.compareSync(req.body.password,obj.password)){
            console.log("User y password correctos")
        }
        else{
            res.render('bad_credentials.ejs');
            console.log("User y password incorrectos")
        }
    });


};
