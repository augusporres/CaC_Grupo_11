const admin = ((req, res) => {
    return res.status(200).json({ message: 'GET Admin!'})
})

const getCreate = ((req, res) => {
    return res.status(200).json({ message: `GET Create admin`})
})

const postCreate = ((req, res) => {
    return res.status(200).json({ message: `POST Create Admin`})
})

const getAdminById = ((req, res) => {
    const id = req.params.id
    return res.status(200).json({ message: `GET Edit Admin by id: ${id}`})
})

const updateById = ((req, res) => {
    const id = req.params.id
    return res.status(200).json({ message: `PUT Edit Admin id: ${id}`})
})

const deleteById = ((req, res) => {
    const id = req.params.id
    return res.status(200).json({message: `DELETE by id: ${id}`})
})

module.exports = {
    admin,
    getCreate,
    postCreate,
    getAdminById,
    updateById,
    deleteById
}