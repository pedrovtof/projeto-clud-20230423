const CustomersModel = require('../models/customers')
const { crypto } = require('../helpers/password')
 
const titleRegister = 'Cadastro de Clientes'

function index(req, res){
    res.render('register', {
        title: titleRegister
    })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password,
    }= req.body 

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()


    res.render('register', {
        title: titleRegister,
        message: "Cadastro realizado com sucesso"
    })
}


async function listUsers(req, res){
    const users = await CustomersModel.find()

    res.render('listUsers',{
        title:"Lista de cadastro",
        users,
    })
}

function indexEdit(req,res){
    res.render('edit', {
        title: "Editar usuario",
    })
}

module.exports = {
    add,
    index,
    listUsers,
    indexEdit,
}