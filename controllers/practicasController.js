var conexion = require("../config/conexion");
var practica = require("../model/practica");
const moment = require('moment-timezone');
const db = require('../config/firebase');
//import { collection, getDocs } from "firebase/firestore";

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
            res.render('practicas/nueva-practica', { alert: false, alertTitle: 'Todo ok' });
        } else {
            res.redirect('/');
        }
    },

    chat:async function (req,res) {
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
        //console.log('Recepción de datos');
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
    },

    storePractice:function (req,res) {
        const data = req.body;
        let fecha = data.fecha;
        let horario = data.horario;
        // Eliminar las barras de la cadena de la fecha
        fecha = fecha.replace(/\//g, '');
        // Eliminar los espacios en blanco de la cadena de horario
        horario = horario.replace(/\s/g, '');
        // Dividir la cadena de horario en dos subcadenas
        const horarios = horario.split('-');
        // Eliminar los últimos dos dígitos de cada subcadena
        horario = horarios[0].slice(0, -2) + horarios[1].slice(0, -2);
        // Eliminar los símbolos "-" y ":" de la cadena de horario
        horario = horario.replace(/[-:]/g, '');

        let id = fecha.toString() + "" + horario.toString();
        const newData = Object.assign({ID: id}, data);
        console.log(newData)
        practica.getPractica(conexion, [data.fecha, data.horario], function(err, practicaData) {
            if (practicaData.length > 0) {
                console.log('Ya existe una práctica registrada en esta fecha y hora!');
                res.render('practicas/nueva-practica', { alert: true, alertTitle: '¡Ya hay una práctica en esta hora y fecha!' });
            } else {
                practica.storePractice(conexion, [newData], (err, rows) => {
                    res.render('practicas/nueva-practica', { alert: true, alertTitle:'¡Práctica agregada!' });
                });
            }
        });
    }, 

    updatePractice:function (req, res) {
        if(req.session.loggedin) {
            const data = req.body;
            const fecha = data.fecha;
            const date = moment.tz(fecha, 'YYYY-MM-DD', 'America/Mexico_City');
            const dia = date.date().toString().padStart(2, '0');
            const mes = (date.month() + 1).toString().padStart(2, '0');
            const anio = date.year().toString().slice(-2);
            const fechaFormateada = `${dia}/${mes}/${anio}`;
            let newHorario = data.horario;
            newHorario = newHorario.replace(/\s/g, '');
            // Dividir la cadena de horario en dos subcadenas
            const horarios = newHorario.split('-');
            // Eliminar los últimos dos dígitos de cada subcadena
            newHorario = horarios[0].slice(0, -2) + horarios[1].slice(0, -2);
            // Eliminar los símbolos "-" y ":" de la cadena de horario
            newHorario = newHorario.replace(/[-:]/g, '');
            const newID = `${dia}${mes}${anio}${newHorario}`;
            practica.updatePractice(conexion, fechaFormateada.toString(), [data.dia], [data.horario], [data.grupo], [data.materia], [data.docente], [data.alumnos], [data.carrera], [data.software], [data.id], (err, rows) => {
                practica.updateId(conexion, newID, fechaFormateada.toString(), [data.horario], (err, rows) => {
                    practica.obtener(conexion, function(err,datos) {
                        res.render('practicas/agendar', {practicas:datos});
                    });
                });
            });
        } else {
            res.redirect('/');
        }
    }
}