const pool = require('../config/database')

const getAllShopsFromDb = async () => {
    try {
        const datos = await pool.query("SELECT * FROM product limit 9")
        console.log(datos[0])
        return datos[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = getAllShopsFromDb