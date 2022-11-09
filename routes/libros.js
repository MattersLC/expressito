var express = require('express');
var router = express.Router();
const librosController = require("../controllers/librosController")

/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear);
router.post('/enviar', librosController.guardar);

module.exports = router;