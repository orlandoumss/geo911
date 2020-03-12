'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'radiokeyuteppi911';

exports.createToken = function(user){
    var payload = {
        ind: user._id,
        grado: user.grado,
        nombre: user.nombre,
        apellidoP: user.apellidoP,
        apellidoM: user.apellidoM,
        cedula: user.cedula,
        telefono: user.telefono,
        nomb_user: user.nomb_user,
        rol_user: user.rol_user,
        password: user.password,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };
    return jwt.encode(payload, secret);
};