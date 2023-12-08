const getLogin = ((req, res) => {
    res.status(200).json({message: 'GET Login succeed!'})
})

const postLogin = ((req, res) => {
    res.status(200).json({message: 'POST Login succeed!'})
})

const getRegister = ((req, res) => {
    res.status(200).json({message: 'GET Register succeed!'})
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