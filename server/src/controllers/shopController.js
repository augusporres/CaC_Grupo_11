var getAllShopsFromDb = require('../models/model')

// @desc Get all shops
// @route GET /shop
// @access Private
const getAllShops = (async (req, res) => {
    // funcion para traer datos de la base
    const datos =  await getAllShopsFromDb()
    res.render('shop.ejs', {productos: datos})
})

// - GET -> /shop/item/:id
const getShopItemById = ((req, res) => {
    const id = req.params.id
    return res.status(200).json({ message: `Get Shop item by Id: ${id}`})
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