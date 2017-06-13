/**
 * Created by chinegua on 22/4/17.
 */
const Infantil = require('../models/infantil');

exports.index = function (req, res) {
    res.render('infantil_crud.ejs')

}

exports.post = function (req, res) {


    let data = {
        suelo              :   ''+req.body.suelo+'',
        nombre             :   ''+req.body.nombre+'',
        superficie         :   ''+req.body.superficie+'',
        situacion          :   ''+req.body.situacion+'',
        latitud            :   ''+req.body.latitud+'',
        longitud           :   ''+req.body.longitud+'',


    };


    let infantil = new Infantil(data);

    infantil.save(function(err){
        console.log(err);
        res.redirect('/crud/infantil')
    });


}