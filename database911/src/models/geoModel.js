'use strict'
const { Schema, model } = require('mongoose');

const geoSchema = new Schema({
    nom_grupo: String,
    razon_social: String,
    direccion: String,
    telefono: Number,
    distrito: String,
    descripcion: String,
    lon: String,
    lat: String
}, {
    timestamps: true
},{
    collection: 'datageo'
}
);

module.exports = model('GeoModel', geoSchema);

    