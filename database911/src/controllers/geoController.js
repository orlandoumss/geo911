'use strict'

// modulos 
var bcrypt = require('bcrypt-nodejs');

var fetch = require('node-fetch');
// modelos
var GeoModel = require('../models/geoModel');

// Servicios
var jwt = require('../services/jwt');

// acciones 
function pruebas(req, res){
    res.status(200).send({
        message: 'probando controlador de usuarios'
    });
}

const saveGeolocalizacion = async(req, res)=> {
    // Crear objeto de usuario
    var geo = new GeoModel();

    //Recoger parametros de peticion
    var params = req.body;
    
     console.log( params );

    try {
      geo.nom_grupo = params.nom_grupo;
      geo.razon_social = params.razon_social;
      geo.direccion = params.direccion;
      geo.telefono = params.telefono;
      geo.distrito = params.distrito;
      geo.descripcion = params.descripcion;
      geo.lon = params.lon;
      geo.lat = params.lat;

      await geo.save()
      res.status(200).send("Datos guardados correctamente ...")
    } catch (error) {
      res.status(401).end("Datos incorrectos ...")
    }
    // if(params){
    //   // guardar en base de datos
    //   user.save((err, userStored) => {
    //                 if(err){
    //                     res.status(500).send({message: 'error al guardar usuario'});
    //                 }else{
    //                     if(!userStored){
    //                         res.status(404).send({message: 'no se ha registrado el usuario'});
    //                     }else{
    //                         res.status(200).send({user: userStored});
    //                     }
    //                 }
    //             });
    //         });
            
    // }else{
    //     res.status(200).send({
    //         message: 'introduce los datos correctamente para registrar el usuario'
    //     });
    // }
  }

  const getLocalizacion = async (req, res) => {
    try {
      const datos = await GeoModel.find();
      if(!datos) return res.status(401).send('No existen datos en la base de tados ');
      else{
        return res.status(200).json(datos);
      }
    } catch (error) {
      return res.status(200).end('existe error ...');
    }
    
  }

  const getItemGeo = async (req, res) => {
    try {
      const datos = await GeoModel.distinct("nom_grupo");
      if(!datos) return res.status(401).send('No existen datos en la base de tados ');
      else{
        return res.status(200).json(datos);
      }
    } catch (error) {
      return res.status(200).end('existe error ...');
    }
    
  }

  module.exports = {
    pruebas,  saveGeolocalizacion, getLocalizacion, getItemGeo
}