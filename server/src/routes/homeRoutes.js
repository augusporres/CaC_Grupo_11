const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.redirect('/home')
})

router.route('/home')
    .get(homeController.home)

router.route('/contact')
    .get(homeController.contact)

router.route('/about')
    .get(homeController.about)

router.route('/faqs')
    .get(homeController.faqs)

module.exports = router