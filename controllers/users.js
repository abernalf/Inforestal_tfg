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
        nick: '' + req.body.nick + '',
        password: '' + hash + '',
        mail: '' + req.body.mail + '',

    };
    console.log("El user a registrar");
    console.log(data);

    let user = new Users(data);

    user.save(function (err) {
        Users.findOne({'nick': data.nick}, function (err, obj) {
            req.session.user = obj._id;
            //req.session.user = obj.nick;
            console.log(obj._id);
            res.redirect("/map/index");
        });

    });
}
exports.login = function(req,res){


    Users.findOne({ 'nick': req.body.name},function(err,obj) {
        console.log("Ha encontrado un user");
        console.log(obj);

        if(bcrypt.compareSync(req.body.password,obj.password)){
            console.log("User y password correctos");
            req.session.user = obj._id;
            res.redirect("/map/index");
        }
        else{
            res.render('bad_credentials.ejs');
            console.log("User y password incorrectos")
        }
    });


};
