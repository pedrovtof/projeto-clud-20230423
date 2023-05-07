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
 
async function formEdit(req,res){

    const {id} = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: "Editar usuario",
        user,
    })
}

async function edit(req, res){
    const {
        name,
        age,
        email,
    }= req.body 

    const { id } = req.params

    const user =  await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email
    
    user.save()

    res.render('edit', {
        title:"Editar usuario",
        user,
        message:"Usuario alterado com sucesso"
    })

}

async function remove(req, res){
    const {id} = req.params

    const remove = await CustomersModel.deleteOne({_id:id})

    if(remove.ok){
        res.redirec('/list')
    }

}

module.exports = {
    add,
    index,
    listUsers,
    formEdit,
    edit,
    remove,
}