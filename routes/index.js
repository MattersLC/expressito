var express = require('express');
var router = express.Router();
const librosController = require("../controllers/librosController")

/* GET home page. */
router.get('/', function(req,res,next) {
  res.send("Bienvenido a la biblioteca");
});

module.exports = router;
