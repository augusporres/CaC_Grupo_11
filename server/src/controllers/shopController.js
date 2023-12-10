var modules = require('../models/model')

// @desc Get all shops
// @route GET /shop
// @access Private
const getAllShops = (async (req, res) => {
    // funcion para traer datos de la base
    const datos =  await modules.getAllProductsFromDb()
    res.render('shop.ejs', {productos: datos})
})

// - GET -> /shop/item/:id
const getShopItemById = (async (req, res) => {
    const id = req.params.id
    console.log(`ID: ->`,id)
    var dato = await modules.getShopItemById(id)
    res.render('item.ejs', {producto: dato})
})
// - POST -> /shop/item/:id/add
const addShop = ((req, res) => {
    const id = req.params.id
    return res.status(200).json({ message: `Add Shop item by Id: ${id}`})
})
// - GET -> /shop/cart
const getCart = ((req, res) => {
    res.render('carrito.ejs')
})
// - POST -> /shop/cart
const setCart = ((req, res) => {})

module.exports = {
    getAllShops,
    getShopItemById,
    addShop,
    getCart,
    setCart
}