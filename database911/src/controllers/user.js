'use strict'

// modulos 
var bcrypt = require('bcrypt-nodejs');


// modelos
var User = require('../models/user');

// Servicios

var jwt1 = require('../services/jwt');
const jwt = require('jsonwebtoken');
const confisecret = require('../../config');

var secret = 'radiokeyuteppi911';
// acciones 
function pruebas(req, res){
    res.status(200).send({
        message: 'probando controlador de usuarios'
    });
}

function saveUser(req, res){
    // Crear objeto de usuario
    var user = new User();

    //Recoger parametros de peticion
    var params = req.body;
    
     console.log( params );

    if(params){
            user.grado = params.grado;
            user.nombre = params.nombre;
            user.apellidoP = params.apellidoP;
            user.apellidoM = params.apellidoM;
            user.cedula = params.cedula;
            user.telefono = params.telefono;
            user.nomb_user = params.nomb_user;
            user.rol_user = params.rol_user;
            user.password = params.password;
            user.email = params.email;

            bcrypt.hash(params.password, null, null, function(err, hash){
                user.password = hash;

                //user.save();
                // guardar en base de datos
                user.save((err, userStored) => {
                    if(err){
                        res.status(500).send({message: 'error al guardar usuario'});
                    }else{
                        if(!userStored){
                            res.status(404).send({message: 'no se ha registrado el usuario'});
                        }else{
                            res.status(200).send({user: userStored});
                        }
                    }
                });
            });
            
    }else{
        res.status(200).send({
            message: 'introduce los datos correctamente para registrar el usuario'
        });
    }

}


/* ************************************************************************************* */
// function login(req, res){
//     var params = req.body;
//     var nomb_user = params.nomb_user;
//     var password = params.password;

//     User.findOne({nomb_user: nomb_user.toLowerCase()}, (err,user) => {
//         if(err){
//             res.status(500).send({message:'error al comprobar usuario'});
//         }else{
//             if(user){
//                 bcrypt.compare(password, user.password, (err, check) => {
//                     if(check){
//                         if(params.gettoken()){
//                             res.status(200).send({
//                                 token: jwt.createToken(user)
//                             });
//                         }else{
//                             res.status(200).send({user});
//                         }
                        
//                     }else{
//                         res.status(404).send({
//                             message: 'El usuario no ha podido loguearse'
//                         });
//                     }
//                 });
//                 res.status(200).send({user});
//             }else{
//                 res.status(404).send({
//                     message: 'El usuario no existe'
//                 });
//             }

//         }
//     });
 
// }

const login = async (req, res) => {
    const {nomb_user, password} = req.body;
    const user = await User.findOne({nomb_user: nomb_user});
    if(!user) {
        return res.status(404).json({mensaje:"El Usuario no existe.."});
    }
    //const passValid = await bcrypt.compare(password, user.password);//user.validatePass(password);
    bcrypt.compare(password, user.password, (err, result) => {
        if(err) {
            return res.status(400).send(err);
        }
        if(result) {
            const token = jwt.sign({id: user._id}, secret);
            return res.json({auth: true, token});
        }else{
            return res.status(401).json({auth: false, token: null});
        }
    });
}  


module.exports = {
    pruebas, saveUser, login
}
