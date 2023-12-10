var modules = require('../models/model')

const getLogin = ((req, res) => {
    res.render('login.ejs')
})

const postLogin = ((req, res) => {
    const authUser = modules.getUserByMailFromDb(req.body)
    res.status(200).json(authUser)
})

const getRegister = ((req, res) => {
    res.render('register.ejs')
})

const postRegister = ((req, res) => {
    res.status(200).json({message: 'POST Register succeed!'})
})

const logout = ((req, res) => {
    res.status(200).json({message: 'Logout succeed!'})
})

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    logout
}