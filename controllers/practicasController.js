var conexion = require("../config/conexion");
var practica = require("../model/practica");

module.exports={
    index:function (req,res) {
        practica.obtener(conexion,function(err,datos) {
            console.log(datos);
            res.render('practicas/index',{title:'Aplicación', practicas:datos});
        });
    },

    agendar:function (req,res) {
        practica.obtener(conexion,function(err,datos) {
            console.log(datos);
            res.render('practicas/agendar',{title:'Aplicación', practicas:datos});
        });
        //res.render('practicas/agendar');
    },

    nueva_practica:function(re,res) {
        res.render('practicas/nueva-practica');
    },

    chat:function (req,res) {
        res.render('practicas/chat');
    },

    notas:function (req,res) {
        res.render('practicas/notas');
    },
    
    escaner:function (req,res) {
        res.render('practicas/escaner');
    },

    eliminar:function (req,res) {
        console.log('Recepción de datos');
        console.log(req.params.id);

        practica.retornarDatosID(conexion, req.params.id, function(err,registros) {
            practica.borrar(conexion, req.params.id, function(err){
                 res.redirect('/practicas/agendar');
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