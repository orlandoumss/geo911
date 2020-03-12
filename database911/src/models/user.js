'use strict'

//  var mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    grado: String,
    nombre: String,
    apellidoP:String,
    apellidoM:String,
    cedula: String,
    telefono: Number,
    nomb_user: String,
    rol_user: String,
    password: String,
    email: String
}, {
    timestamps: true
},{
    collection: 'users'
}
);

module.exports = model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);
