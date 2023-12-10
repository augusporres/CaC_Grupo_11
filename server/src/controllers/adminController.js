
var modules = require('../models/model')

const admin = (async (req, res) => {
    const datos =  await modules.getAllProductsFromDb()
    res.render('admin.ejs', {
        productos : datos
    })
})

const getCreate = (async (req, res) => {
    const productos = await modules.getAllProductsFromDb()
    const categorias = await modules.getAllCategoriesFromDb()
    const licencias = await modules.getAllLicencesFromDb()
    res.render('create.ejs', {
        productos: productos,
        categorias: categorias,
        licencias: licencias
    })
})

const postCreate = ((req, res) => {
    console.log(req.body)
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

const deleteById = (async (req, res) => {
    const id = req.params.id
    await modules.deleteShopItemById(id)
    const datos =  await modules.getAllProductsFromDb()
    res.render('admin.ejs', {
        productos : datos
    })
})

module.exports = {
    admin,
    getCreate,
    postCreate,
    getAdminById,
    updateById,
    deleteById
}