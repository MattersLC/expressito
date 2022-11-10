var express = require('express');
var router = express.Router();
const htmlController = require("../controllers/htmlController")

/* GET home page. */
router.get('/', htmlController.index);
//router.get('/crear', librosController.crear);
//router.post('/enviar', librosController.guardar);

module.exports = router;