const pool = require('../config/database')

const getAllProductsFromDb = async () => {
    try {
        const datos = await pool.query("SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id")
        return datos[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}
const getShopItemById = async (req) => {
    try {
        const datos = await pool.query(`SELECT * FROM product  JOIN licence ON product.licence_id = licence.licence_id where product_id=${req}`)
        return datos[0][0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

const deleteShopItemById = async (req) => {
    try {
        await pool.query(`DELETE FROM product WHERE product_id = ${ req }`)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const getAllCategoriesFromDb = async () => {
    try {
        const categorias = await pool.query("SELECT * FROM category")
        return categorias[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}
const getAllLicencesFromDb = async () => {
    try {
        const licencias = await pool.query("SELECT * FROM licence")
        return licencias[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

const createProduct = async(body) => {
    try {
        await pool.query(`INSERT INTO product VALUES(${body.product_id},'${body.product_name}', '${body.description}', ${body.price}, ${body.stock}, ${body.discount}, '${body.sku}', ${body.due}, '${body.img}', '${body.img}', current_timestamp(), ${body.licence},${body.category})`)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const getUserByMailFromDb = async(req) => {
    try {
        var user = await pool.query(`SELECT * FROM user WHERE email = '${req.usermail}' AND password = '${req.password}'`)
        return user[0][0]
    } catch (error) {
        console.error(error)
        throw error    
    }
}
module.exports = {
    getAllProductsFromDb, 
    getShopItemById, 
    deleteShopItemById,
    getAllCategoriesFromDb,
    getAllLicencesFromDb,
    createProduct,
    getUserByMailFromDb
}