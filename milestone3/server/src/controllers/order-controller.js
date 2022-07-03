'use strict';

const repository    = require('../respositories/orders-repository');
const guid          = require('guid');
const auth_service  = require('../services/auth-service');

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar GET em Order',
            data: e
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token']
        const data = await auth_service.decode_token(token);

        await repository.create({
            customer: data.id,
            number: guid.raw().substring(0,6),
            items: req.body.items
        });

        res.status(201).send({ message: 'Order cadastrado com sucesso' });
    } catch (e) {
        res.status(400).send(
            {
                message: 'Falha ao cadastrar Order',
                data: e
            })
    }
};