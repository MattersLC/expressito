var conexion = require("../config/conexion");
var practica = require("../model/practica");

module.exports={
    index:function (req,res) {
        if(req.session.loggedin) {
            res.render('practicas/index');
        } else {
            res.redirect('/');
        }
    },

    agendar:function (req,res) {
        if(req.session.loggedin) {
            practica.obtener(conexion,function(err,datos) {
                res.render('practicas/agendar', {practicas:datos});
            });
        } else {
            res.redirect('/');
        }
    },

    nueva_practica:function(req,res) {
        if(req.session.loggedin) {
            res.render('practicas/nueva-practica');
        } else {
            res.redirect('/');
        }
    },

    chat:function (req,res) {
        if(req.session.loggedin) {
            res.render('practicas/chat');
        } else {
            res.redirect('/');
        }
    },

    notas:function (req,res) {
        if(req.session.loggedin) {
            res.render('practicas/notas');
        } else {
            res.redirect('/');
        }
    },
    
    escaner:function (req,res) {
        if(req.session.loggedin) {
            res.render('practicas/escaner');
        } else {
            res.redirect('/');
        }
    },

    eliminar:function (req,res) {
        console.log('Recepción de datos');
        console.log(req.params.id);

        practica.retornarDatosID(conexion, req.params.id, function(err,registros) {
            practica.borrar(conexion, req.params.id, function(err){
                 res.redirect('../agendar');
            });
        });
    },
    
    editar:function (req,res) {
        console.log('Recepción para edición de datos');
        console.log(req.params.id);

        practica.retornarDatosID(conexion, req.params.id, function(err,registros) {
            console.log(registros[0]);
            res.render('practicas/editar', {practica:registros[0]});
        });
    }
}