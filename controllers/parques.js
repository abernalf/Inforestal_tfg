/**
 * Created by chinegua on 24/4/17.
 */
const Parques = require('../models/parques_recreativos');

exports.index = function (req, res) {
    res.render('parques_crud.ejs')

}

exports.post = function (req, res) {


    let data = {
        nombre            :   ''+req.body.nombre+'',
        isla              :   ''+req.body.isla+'',
        municipio         :   ''+req.body.municipio+'',
        acceso            :   ''+req.body.acceso+'',
        transporte        :   ''+req.body.transporte+'',
        contacto          :   ''+req.body.contacto+'',
        permiso           :   ''+req.body.permiso+'',
        superficie        :   ''+req.body.superficie+'',
        minusvalido       :   ''+req.body.minusvalido+'',
        agua              :   ''+req.body.agua+'',
        electricidad      :   ''+req.body.electricidad+'',
        duchas            :   ''+req.body.duchas+'',
        bar               :   ''+req.body.bar+'',
        comedor           :   ''+req.body.comedor+'',
        fogones           :   ''+req.body.fogones+'',
        banco             :   ''+req.body.banco+'',
        apartamentos      :   ''+req.body.apartamentos+''


    };

    let parques = new Parques(data);

    parques.save(function(err){
        console.log(parques);
        console.log(err);
        res.redirect('/crud/parques')
    });

};
