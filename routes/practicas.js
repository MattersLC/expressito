var express = require('express');
var router = express.Router();
const practicasController = require("../controllers/practicasController")

/* GET home page. */
router.get('/', practicasController.index);
router.get('/agendar', practicasController.agendar);
router.get('/nueva-practica', practicasController.nueva_practica);
router.get('/chat', practicasController.chat);
router.get('/notas', practicasController.notas);
router.get('/escaner', practicasController.escaner);

router.post('/eliminar/:id', practicasController.eliminar);
router.get('/editar:id', practicasController.editar);

module.exports = router;