var conexion = require("../config/conexion");
var practica = require("../model/practica");

module.exports={
    index:function (req,res) {
        practica.obtener(conexion,function(err,datos) {
            console.log(datos);
            res.render('html/index',{title:'Aplicación', practicas:datos});
        });
    },

    /*crear:function (req,res) {
        res.render('html/crear');
    },*/

    /*guardar:function (req,res) {
        res.send(req.body);
    }*/
}