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
        res.render('practicas/agendar');
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
    }
}