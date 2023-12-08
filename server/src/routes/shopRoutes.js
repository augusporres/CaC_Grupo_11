const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.route('/')
    .get(shopController.getAllShops)

router.route('/item/:id')
    .get(shopController.getShopItemById)

router.route('/item/:id/add')
    .post(shopController.addShop)

router.route('/cart')
    .get(shopController.getCart)
    .post(shopController.setCart)

module.exports = router