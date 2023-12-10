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
        await pool.query(`INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, create_time, licence_id, category_id) VALUES('${body.product_name}', '${body.description}', ${body.price}, ${body.stock}, ${body.discount}, '${body.sku}', ${body.due}, '${body.img[0]}', '${body.img[1]}', current_timestamp(), ${body.licence},${body.category})`)
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
const getRolesByUserId = async(req) => {
    try {
        var role = await pool.query(`SELECT * FROM user_has_role JOIN role ON user_has_role.role_role_id = role.role_id WHERE user_user_id = '${req}' `)
        return role[0][0]
        
    } catch (error) {
        console.error(error)
        throw error    
    }
}

const createUser = async(body) => {
    try {
        await pool.query(`INSERT INTO user (name, lastname, email, password, create_time) VALUES('${body.name}', '${body.lastname}', '${body.usermail}', '${body.password}', current_timestamp())`)
        var userId = await pool.query(`SELECT user_id FROM user WHERE email = '${body.usermail}'`)
        await pool.query(`INSERT INTO user_has_role (user_user_id, role_role_id) VALUES(${userId[0][0].user_id}, 2)`)
        return userId[0][0].user_id
    } catch (error) {
        console.error(error)
        throw error
    }
}

const udpateItemById = async(body) => {
    try {
        await pool.query(`UPDATE product SET product_name = '${ body.product_name }', category_id= ${ body.category }, licence_id = ${ body.licence }, product_description= '${ body.description }', price= ${ body.price }, stock= ${ body.stock }, discount= ${ body.discount }, sku= '${ body.sku }', dues= ${ body.due }, image_front= '${ body.img }', image_back= '${ body.img }' WHERE product_id = ${ body.product_id }`)
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
    getUserByMailFromDb,
    getRolesByUserId,
    createUser,
    udpateItemById
}