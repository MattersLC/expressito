const conexion = require('../config/firebase');
const estudiantes = require("../model/estudiantes");
const bcrypt = require('bcrypt');

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

    storeStudent:function(req,res) {
        const data = req.body;

        estudiantes.getStudentByEmail(conexion, [data.email], function(err, userdata) {
            if(userdata.length > 0) {
                res.render('login/signup', { alert: true, alertTitle: '¡El usuario ya existe!' });
            } else {
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;

                    estudiantes.createStudent(conexion, [data], (err, rows) =>{
                        res.redirect('/');
                    });
                });
            }
        });
    },

    aux:async function (req,res) {
        if(req.session.loggedin) {
            res.render('practicas/chat');
            const docs = await db.collection('practicas').get();
            docs.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });

        } else {
            res.redirect('/');
        }
    },
}