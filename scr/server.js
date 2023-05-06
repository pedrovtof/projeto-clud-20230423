//instalados
const express = require('express');
const path = require ('path');
//locais
const db = require ('./dataBase');
const routes = require('./routes');


const app = express();

//conexão com banco
db.connect()

//define template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));


//habilita server para receber dados via post form
app.use(express.urlencoded({extended: true}));


//rota
app.use('/', routes)


//404 error not found
app.get('/', (req, res)=>{
    res.send('pagina nao encontrada');//middleware
})


//executando servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is on port ${port}`));