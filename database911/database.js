'use strict'

const mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3800;

mongoose.Promise = global.Promise;
// mongodb://localhost:27017/geo911
// mongodb+srv://admin_orlando:Bol4000uti@data-geobol110-jqlap.mongodb.net/test?retryWrites=true&w=majority
//
mongoose.connect('mongodb://localhost:27017/geo911', {
     useNewUrlParser: true,
     useUnifiedTopology: true
    
}).then(()=>{
    console.log('Base de Datos Conectado ...');
    app.listen(port, () => {
         console.log('El servidor sta corriendo .......')
    });
    
 }).catch(err => console.log(err));