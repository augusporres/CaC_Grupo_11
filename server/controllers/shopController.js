// const Shop = require('../models/Shop')

// @desc Get all shops
// @route GET /shop
// @access Private
const getAllShops = ((req, res) => {
    return res.status(200).json({ message: 'Get All Shops!'})
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
const getCart = ((req, res) => {})
// - POST -> /shop/cart
const setCart = ((req, res) => {})

module.exports = {
    getAllShops,
    getShopItemById,
    addShop,
    getCart,
    setCart
}