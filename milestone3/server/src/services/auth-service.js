'use strict';

const jwt = require('jsonwebtoken');

exports.generate_token = async (data) => {
    return jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}

exports.decode_token = async (token) => {
    let data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                next();
            }
        });
    }
}

exports.is_admin = function (req,res,next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                if (decoded.is_admin === true) {
                    next();
                } else {
                    res.status(403).json({
                        message: 'Você não é um dos administradores'
                    });
                }
            }
        });
    }
}
