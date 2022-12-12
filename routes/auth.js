const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../controllers/auth')

router.post('/login', loginCtrl)
router.post('/signup', registerCtrl)

module.exports = router