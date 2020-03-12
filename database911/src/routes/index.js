const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hola mundo ...'))

router.post('/register', async(req, res) => {
    const { usuario, password} = req.body;
    const newUser = new User({usuario, password});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'boliviakey911')

    res.status(200).json({token})
});

router.post('/signin', async(req, res) => {

    const {usuario, password} = req.body;
    const user = await User.findOne({usuario})
    if(!user) return res.status(401).send("este email no existe");
    if(user.password !== password) return res.status(401).send("pasword incorrecto");

    const token = jwt.sign({_id: user._id}, 'boliviakey911');

    return res.status(200).json({token});
});


module.exports = router;