const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

const requiereAdmin = (req, res, next) => {
    if (!req.session.isAuth) {
        return res.redirect('/auth/login')
    }
}

router.route('/')
    .get(adminController.admin)

router.route('/create')
    .get(adminController.getCreate)
    .post(adminController.postCreate)


router.route('/edit/:id')
    .get(adminController.getAdminById)
    .post(adminController.updateById)
    

router.route('/edit/delete/:id')
    .delete(adminController.deleteById)

module.exports = router