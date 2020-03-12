'use strict'

var express = require('express');
// const router = Router(); 

var GeoController = require('../controllers/geoController');

var api = express.Router();

api.post('/prueba-registro', GeoController.pruebas);
api.post('/geo-registro', GeoController. saveGeolocalizacion);
api.get('/get-registro', GeoController.getLocalizacion);
api.get('/item-grupo', GeoController.getItemGeo);


module.exports = api;
