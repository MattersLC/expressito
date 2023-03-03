var express = require('express');
var router = express.Router();
const practicasController = require("../controllers/practicasController")

/* GET home page. */
router.get('/', practicasController.index);
router.get('/agendar', practicasController.agendar);
router.get('/nueva-practica', practicasController.nueva_practica);
router.post('/nueva-practica', practicasController.storePractice);
router.get('/chat', practicasController.chat);
router.get('/notas', practicasController.notas);
router.get('/escaner', practicasController.escaner);

router.get('/editar:id', practicasController.editar);
router.post('/editar:id', practicasController.updatePractice);
router.post('/eliminar/:id', practicasController.eliminar);

module.exports = router;