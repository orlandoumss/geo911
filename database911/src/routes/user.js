'use strict'

var express = require('express');
// const router = Router(); 

var UserController = require('../controllers/user');
// var GeoController = require('../controllers/geoController');

var api = express.Router();

api.get('/pruebas-del-controlador', UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.login);

// api.post('/registrogeo', UsController.pruebas);
module.exports = api;
