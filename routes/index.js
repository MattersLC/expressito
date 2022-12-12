var express = require('express');
var router = express.Router();
//const practicasController = require("./app/controllers/practicasController")
//const htmlController = require("../controllers/htmlController")

/* GET home page. */
router.get('/', function(req,res,next) {
  //res.send("Bienvenido a la biblioteca");
  //res.render('index');
  res.redirect('login/');
});

module.exports = router;
