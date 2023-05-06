const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
});

const Model = mongoose.model('costumers', schema)

module.exports = Model

//criando registro
/*
const registrer = new Model({
    name:"Pedro",
    age:19,
    email:"pedro@teste.com",
    password:"233444"
})

registrer.save();
*/