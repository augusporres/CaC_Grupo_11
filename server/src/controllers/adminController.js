
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

const postCreate = (async (req, res) => {
    const productos = await modules.getAllProductsFromDb()
    const licencias = await modules.getAllLicencesFromDb()
   
    const licence_id = req.body.licence
    const licencia = licencias.find(lic => lic.licence_id == licence_id)

    const rutaImgLicencia = licencia.licence_image.split('/')[2]
  
    const maxId = productos.reduce((max, obj) => Math.max(max, obj.product_id), -Infinity);
    req.body.product_id = maxId + 1
    req.body.img = '/img/' + rutaImgLicencia + '/' + req.body.img
    const response = await modules.createProduct(req.body)
    return res.status(200).json(req.body)
})

const getAdminById = (async (req, res) => {
    const categorias = await modules.getAllCategoriesFromDb()
    const licencias = await modules.getAllLicencesFromDb()
    const id = req.params.id
    const producto = await modules.getShopItemById(id)
    res.render('edit.ejs', {
        producto: producto,
        categorias: categorias,
        licencias: licencias
    })
})

const updateById = ((req, res) => {
    const id = req.params.id
    return res.status(200).json(req.body)
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