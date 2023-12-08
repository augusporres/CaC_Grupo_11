const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.route('/login')
    .get(authController.getLogin)
    .post(authController.postLogin)

router.route('/register')
    .get(authController.getRegister)
    .post(authController.postRegister)

router.route('/logout')
    .get(authController.logout)


module.exports = router