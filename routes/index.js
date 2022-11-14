var express = require('express');
var router = express.Router();
//const htmlController = require("../controllers/htmlController")

/* GET home page. */
router.get('/', function(req,res,next) {
  res.send("Bienvenido a la biblioteca");
});
//router.get('/', htmlController.index);

module.exports = router;
