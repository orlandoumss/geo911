'use strict'
var mongoose = require('mongoose');


const express = require('express');

require('./database');
// const app = express();
// var app = require('./app');
// var port = process.env.PORT || 3800;

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/auth-911', {
//      useNewUrlParser: true,
//      useUnifiedTopology: true
    
// }).then(()=>{
//     console.log('Base de Datos Conectado ...');
//     app.listen(port, () => {
//          console.log('El servidor sta corriendo .......')
//     });
    
//  }).catch(err => console.log(err));

// require('./database');

// app.use(express.json());

// app.use('/login', require('./routes/index'));

// app.listen(3000);

// console.log('server on port', 3000);