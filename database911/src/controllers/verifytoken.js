const jwt = require('jsonwebtoken');
const config = require('../../config');

function verifyToken (req, res, next){
    const token = req.headers['authorization'];
    if( !token ) {
        return res.status(401).json({
            auth: false,
            message: 'no tiene acceso ...'
        });
    }
    const decode = jwt.verify(token, config.secret);
    console.log(token);
    console.log(decode);
    console.log(decode.id);
    req.userId = decode.id;
    next();
}
module.exports = verifyToken;