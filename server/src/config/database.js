require('dotenv').config()
var mysql = require('mysql2')


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD || '',
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 5,
    queryLimit: 0,
    port: process.env.DB_PORT || 3306
}).promise();
pool.getConnection()
    .then(connection => {
        console.log("Connected to MYSQL")
        connection.release();
    })
    .catch(err => {
        console.error(`Error al conectar con MYSQL: `, err)
    })
module.exports = pool