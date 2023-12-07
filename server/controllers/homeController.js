const path = require('path')

const home = ((req, res) => {
    //res.sendFile(path.join(__dirname, '../../client', 'index.html'))
    res.render("index")
})

const contact = ((req, res) => {
    // res.sendFile(path.join(__dirname, '../../client/pages', 'contacto.html'))
    res.render("index", {title: "No se ha encontrado la página"})
})

const about = ((req, res) => {
    res.status(200).json({message: 'Usted ha sido redirigido a /about'})
})

const faqs = ((req, res) => {
    res.status(200).json({message: 'Usted ha sido redirigido a /faqs'})
})

module.exports = {
    home,
    contact,
    about,
    faqs
}