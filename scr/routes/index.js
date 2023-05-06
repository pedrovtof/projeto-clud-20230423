const router = require('express').Router();


const CustomersControler = require('../controllers/customers')
const IndexControler = require('../controllers/index')
//rotas
router.get('/', IndexControler.index)


//registro
router.get('/register', CustomersControler.index)
router.post('/register/add', CustomersControler.add)

//listar user
router.get('/list', CustomersControler.listUsers)

//editar
router.get('/edit', CustomersControler.indexEdit)
//router.post('/edit', CustomersControler.edit)

module.exports = router