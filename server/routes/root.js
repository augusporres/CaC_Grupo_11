const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.redirect('/home')
})

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'))
})

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/pages', 'contacto.html'))
})

router.get('/about', (req, res) => {
    res.status(200).json({message: 'Usted ha sido redirigido a /about'})
})

router.get('/faqs', (req, res) => {
    res.status(200).json({message: 'Usted ha sido redirigido a /faqs'})
})

module.exports = router