
var modules = require('../models/model')

const admin = (async (req, res) => {
    session = req.session
    if(session.userId){
        const datos =  await modules.getAllProductsFromDb()
        res.render('admin.ejs', {
            productos : datos
        })
    } else {
        res.redirect('/auth/login')
    }
})

const getCreate = (async (req, res) => {
    const productos = await modules.getAllProductsFromDb()
    const categorias = await modules.getAllCategoriesFromDb()
    const licencias = await modules.getAllLicencesFromDb()
    res.render('create.ejs', {
        productos: productos,
        categorias: categorias,
        licencias: licencias
    })
})

const postCreate = (async (req, res) => {
    const licencias = await modules.getAllLicencesFromDb()
    const licence_id = req.body.licence
    const licencia = licencias.find(lic => lic.licence_id == licence_id)
    const rutaImgLicencia = licencia.licence_image.split('/')[2]

    const imagenes = []
    
    if (typeof req.body.img === 'string') {
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img)
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img)
    } else {
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img[0])
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img[1])
    }

    
    req.body.img = imagenes
    const response = await modules.createProduct(req.body)
    res.redirect('/admin')
})

const getAdminById = (async (req, res) => {
    const categorias = await modules.getAllCategoriesFromDb()
    const licencias = await modules.getAllLicencesFromDb()
    const id = req.params.id
    const producto = await modules.getShopItemById(id)
    res.render('edit.ejs', {
        producto: producto,
        categorias: categorias,
        licencias: licencias
    })
})

const updateById = (async (req, res) => {
    req.body.product_id = req.params.id
    const licencias = await modules.getAllLicencesFromDb()
    const licence_id = req.body.licence
    const licencia = licencias.find(lic => lic.licence_id == licence_id)
    const rutaImgLicencia = licencia.licence_image.split('/')[2]
    const imagenes = []
    
    if (typeof req.body.img === 'string') {
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img)
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img)
    } else {
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img[0])
        imagenes.push('/img/' + rutaImgLicencia + '/' + req.body.img[1])
    }
    req.body.img = imagenes
    console.log(req.body)
    await modules.udpateItemById(req.body)
    res.redirect('/shop')
})

const deleteById = (async (req, res) => {
    const id = req.params.id
    await modules.deleteShopItemById(id)
    const datos =  await modules.getAllProductsFromDb()
    res.render('admin.ejs', {
        productos : datos
    })
})
// category=1&licence=1&product_name=&description=Figura+coleccionable+de+Luke+Skylwalker+%26+Grogu+-+The+Mandalorian+Saga.&sku=asdfa&price=1500&stock=10&discount=1&due=6&img=

module.exports = {
    admin,
    getCreate,
    postCreate,
    getAdminById,
    updateById,
    deleteById
}