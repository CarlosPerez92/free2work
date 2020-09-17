const mongoose = require('mongoose')
//IMPORTAR VARIABLES DE ENTORNO
require("dotenv").config({path:'variables.env'})

console.log(process.env.DB_URL);        

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('Connection establishe successfully'))