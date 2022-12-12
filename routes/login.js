var express = require('express');
var router = express.Router();
const loginController = require("../controllers/loginController")

/* GET users listing. */
router.get('/', loginController.login);
router.get('/signup', loginController.signup);
router.post('/signup', loginController.storeUser);
router.get('/recuperar-contrasena', loginController.resetPwd);
router.post('/auth', loginController.auth);

module.exports = router;