const express = require('express')
require('dotenv').config()
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

var pool = require('./src/config/database')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000



// motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized:false,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(cookieParser());
var session
app.use('/', express.static(path.join(__dirname, '/public')))


app.use('/', require('./src/routes/homeRoutes'))
app.use('/shop', require('./src/routes/shopRoutes'))
app.use('/auth', require('./src/routes/authRoutes'))
app.use('/admin', require('./src/routes/adminRoutes'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '../client/pages/404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found"})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))