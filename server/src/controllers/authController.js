var modules = require('../models/model')

const getLogin = ((req, res) => {
    res.render('login.ejs')
})

const postLogin = (async (req, res) => {
    const authUser = await modules.getUserByMailFromDb(req.body)
    if(authUser !== undefined)
    {
        session = req.session
        session.userId = authUser.email
        console.log(req.session)
        res.redirect('/admin')
    }
    else
        res.status(400).json({message: 'Usuario/Contraseña incorrecto'})
})

const getRegister = ((req, res) => {
    res.render('register.ejs')
})

const postRegister = ((req, res) => {
    res.status(200).json({message: 'POST Register succeed!'})
})

const logout = ((req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
})

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    logout
}