const pool = require('../config/database')

const getAllShopsFromDb = async () => {
    try {
        const datos = await pool.query("SELECT * FROM product JOIN licence ON product.licence_id = licence.licence_id limit 9")
        console.log(datos[0])
        return datos[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}
const getShopItemById = async (req) => {
    try {
        const datos = await pool.query(`SELECT * FROM product  JOIN licence ON product.licence_id = licence.licence_id where product_id=${req}`)
        console.log(datos[0][0])
        return datos[0][0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = {getAllShopsFromDb, getShopItemById}