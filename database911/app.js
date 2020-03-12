'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var user_rutes = require('./src/routes/user');
var geo_rutes = require('./src/routes/geoRutes');

// middlewares body-parser
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());

// configuracion de cabeceras  y cors

const cors = require('cors');
app.use(cors());

// rutas base
app.use('/api', user_rutes);
app.use('/geopol', geo_rutes);


// app.use('/api', (req, res) => res.send('hola'));

// app.get('/probando', (req, res) => {
//     res.status(200).send({message:'este es el metodo probando'});
// })

module.exports = app;

