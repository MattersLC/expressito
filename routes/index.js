var express = require('express');
var router = express.Router();
//const practicasController = require("../controllers/practicasController")
//const htmlController = require("../controllers/htmlController")

/* GET home page. */
//router.get('/', practicasController.login);
router.get('/', function(req,res,next) {
  //res.send("Bienvenido a la biblioteca");
  res.render('index');
});
//router.get('/', htmlController.index);

module.exports = router;
