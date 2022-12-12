var conexion = require("../config/conexion");
var practica = require("../model/practica");
const bcrypt = require('bcrypt');
const { hash } = require("bcryptjs");
const usuarios = require("../model/usuarios");

module.exports={
    login:function (req,res) {
        res.render('login/index', { alert: false, alertTitle: 'Oops!', alertMessage: "Correo o contraseña incorrectos" });
    },

    signup:function (req,res) {
        res.render('login/signup', { alert: false, alertTitle: 'Oops!', alertMessage: "El usuario ya existe" });
    },

    register:function(req,res) {
        res.render('login/signup', { error: '' });
    },

    storeUser:function(req,res) {
        const data = req.body;
        usuarios.getUser(conexion, [data.email], function(err, userdata) {
            if(userdata.length > 0 ) {
                console.log('Ya existe este usuario');
                res.render('login/signup', { alert: true, alertTitle: 'Oops!', alertMessage: "El usuario ya existe" });
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
                            res.render('./login/', { alert: true, alertTitle: 'Oops!', alertMessage: "¡Contraseña incorrecta!" });
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
            res.render('./login/', { alert: true, alertTitle: 'Oops!', alertMessage: "¡Escribe tu correo y contraseña!" });
        }

        // Ensure the input fields exists and are not empty
        /*if (email && password) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            usuarios.authUser(conexion, [email, password], function(error, results, fields) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (results.length > 0) {
                    // Authenticate the user
                    req.session.loggedin = true;
                    req.session.email = email;
                    // Redirect to home page
                    res.redirect('../practicas/');
                } else {
                    res.render('./login/', { alert: true, alertTitle: 'Oops!', alertMessage: "Correo o contraseña incorrectos" });
                    //res.send('Correo o contraseña incorrectos');
                }			
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }*/
    }
}