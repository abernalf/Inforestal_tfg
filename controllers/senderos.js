/**
 * Created by chinegua on 22/4/17.
 */
const Sendero = require('../models/senderos');

exports.index = function (req, res) {
    res.render('crud.ejs')

}

exports.post = function (req, res) {


    let data = {
        partida            :   ''+req.body.partida+'',
        fin                :   ''+req.body.fin+'',
        dificultad         :   ''+req.body.dificultad+'',
        mapa               :   ''+req.body.mapa+'',
        distancia          :   ''+req.body.distancia+'',
        duracion           :   ''+req.body.duracion+'',
        latitud            :   ''+req.body.latitud+'',
        longitud           :   ''+req.body.longitud+''

    };

    let sendero = new Sendero(data);

    sendero.save(function(err){
        console.log(err);
        res.redirect('/crud')
    });

}