var conexion = require("../config/conexion");
var libro = require("../model/libro");

module.exports={
    index:function (req,res) {
        libro.obtener(conexion,function(err,datos) {
            console.log(datos);
            res.render('libros/index',{title:'Aplicación', libros:datos});
        });
    },

    crear:function (req,res) {
        res.render('libros/crear');
    },

    guardar:function (req,res) {
        res.send(req.body);
    }
}