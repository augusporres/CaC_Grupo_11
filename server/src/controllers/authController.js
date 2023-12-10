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
        var role = await modules.getRolesByUserId(authUser.user_id)
        console.log(role)
        if(role.role_id != 1)
            res.redirect('/home')
        else
            res.redirect('/admin')
    }
    else
        res.status(400).json({message: 'Usuario/Contraseña incorrecto'})
})

const getRegister = ((req, res) => {
    res.render('register.ejs')
})

const postRegister = (async (req, res) => {
    req.body.password = req.body.password[0]
    console.log(req.body)
    const authUser = await modules.getUserByMailFromDb(req.body)
    if(authUser !== undefined)
    {
        console.error('Ya existe el usuario')
    }
    else
    {
       var userId = await modules.createUser(req.body)
       if(userId !== undefined)
       {
            res.redirect('/auth/login')
       }
    }
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