require('dotenv').config()
var mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD || '',
    database: process.env.DB
});

connection.connect();

module.exports = connection;