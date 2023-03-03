var conexion = require("../config/conexion");
var practica = require("../model/practica");
const bcrypt = require('bcrypt');
const { hash } = require("bcryptjs");
const usuarios = require("../model/usuarios");

module.exports={
    login:function (req,res) {
        res.render('login/index', { alert: false, alertTitle: '¡Correo o contraseña incorrectos!' });
    },

    signup:function (req,res) {
        res.render('login/signup', { alert: false, alertTitle: '¡El usuario ya existe!' });
    },

    register:function(req,res) {
        res.render('login/signup', { error: '' });
    },

    storeUser:function(req,res) {
        const data = req.body;
        usuarios.getUser(conexion, [data.email], function(err, userdata) {
            if(userdata.length > 0 ) {
                console.log('Ya existe este usuario');
                res.render('login/signup', { alert: true, alertTitle: '¡El usuario ya existe!' });
            } else {
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;

                    usuarios.createUser(conexion, [data], (err, rows) => {
                        res.redirect('/');
                    });
                });
            }
        });
    },

    resetPwd:function (req,res) {
        res.render('login/recuperar-contrasena');
    },

    auth:function (req,res) {
        let email = req.body.email;
        let password = req.body.password;

        if(email) {
            usuarios.getUser(conexion, [email], function(err,userdata) {
                userdata.forEach(element => {
                    bcrypt.compare(password, element.password, (err,isMatch) => {
                        if(!isMatch) {
                            res.render('./login/', { alert: true, alertTitle: '¡Contraseña incorrecta!'});
                        } else {
                            // Authenticate the user
                            req.session.loggedin = true;
                            req.session.email = email;
                            // Redirect to home page
                            res.redirect('../practicas/');
                        }
                    }) 
                });
            })
        } else {
            res.render('./login/', { alert: true, alertTitle: '¡Escribe tu correo y contraseña!' });
        }
    }
}