'use strict';

const repository = require('../respositories/customer-repository');
const auth_service = require('../services/auth-service');
const md5 = require('md5');
const customer = require('../models/customer');


exports.post = async (req, res, next) => {
    try {
        let resp_check_email = await repository.get_user({ email: req.body.email });
        if (resp_check_email !== null) {
            res.status(400).send({ message: 'E-mail já cadastrado no banco de dados.\nDescubra a senha ou faça cadastro com outro e-mail' });
            return;
        }

        let resp_check_cpf = await repository.get_user({ cpf: req.body.cpf });
        if (resp_check_cpf !== null) {
            res.status(400).send({ message: 'CPF já cadastrado no banco de dados.\nDescubra a senha ou faça cadastro com outro e-mail' });
            return;
        }

        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            is_admin: false,
            phone: req.body.phone,
            address: req.body.address,
            cpf: req.body.cpf,
            shopping_cart: []
        });

        const new_customer = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        let new_customer_token = await auth_service.generate_token({
            id: new_customer._id,
            email: new_customer.email,
            name: new_customer.name,
            is_admin: false
        });

        res.status(201).send({ message: 'Cadastrado realizado com sucesso', token: new_customer_token });
    } catch (e) {
        res.status(400).send(
            {
                message: 'Falha ao cadastrar Cliente',
                data: e
            });
    }
};

exports.authenticate_token = async (req, res, next) => {
    try {
        let user_token = req.headers['x-access-token'];
        let user_data = await auth_service.decode_token(user_token);
        res.status(200).send({ message: 'Usuário validado', is_admin: user_data.is_admin, email: user_data.email, name: user_data.name })
    } catch (e) {
        res.status(400).send(
            {
                message: 'Cliente não encontrado',
                data: e
            });
    }
}

exports.authenticate = async (req, res, next) => {
    try {
        const customer = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!customer) {
            res.status(404).send({ message: 'Usuário ou senha inválida(s)' });
            return;
        }

        const token = await auth_service.generate_token({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            is_admin: customer.is_admin
        });

        console.log(token);

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name,
                is_admin: customer.is_admin
            }
        });
    } catch (e) {
        res.status(400).send(
            {
                message: 'Falha ao autenticar usuário',
                data: e
            })
    }
};

exports.refresh_token = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await auth_service.decode_token(token);

        const customer = await repository.get_by_id(data.id);

        if (!customer) {
            res.status(401).send({
                message: 'Cliente não encontrado'
            });
            return;
        }

        const token_data = await auth_service.generate_token({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            is_admin: customer.is_admin
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(400).send(
            {
                message: 'Falha ao autenticar usuário',
                data: e
            })
    }
}

exports.add_to_cart = async (req, res, next) => {
    try {
        let product_id = req.body.product;
        let product_quantity = req.body.quantity;
        let user_token = req.headers['x-access-token'];

        let user_data = await auth_service.decode_token(user_token);
        let user_id = user_data.id;

        await repository.add_to_cart(user_id, product_id, product_quantity);
        res.status(200).send({message: 'Produto adicionado com sucesso!'});
    } catch (e) {
        res.status(400).send(
            {
                message: 'Falha ao adicionar produto no carrinho do usuário',
                data: e
            })
    }
}

exports.remove_from_cart = async (req, res, next) => {
    try {
        let product_id = req.body.product_id;
        let user_token = req.headers['x-access-token'];

        let user_data = await auth_service.decode_token(user_token);
        let user_id = user_data.id;

        await repository.remove_from_cart(user_id, req.body.product_id);
        res.status(200).send({message: 'Produto removido com sucesso!'});
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover produto no carrinho do usuário',
            data: e
        })
    }
}



exports.get_user_data = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token']
        const data = await auth_service.decode_token(token);

        let user = await repository.get_user({ email: data.email });
        res.status(200).send({
            message: 'Perfil encontrado com sucesso!',
            data: {
                name: user.name,
                email: user.email,
                shopping_cart: user.shopping_cart,
            }
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao dar GET em usuário',
            data: e
        });
    }
}

exports.update_customer = async (req, res, next) => {
    try {
        let user_token = req.headers['x-access-token']
        let user_data = await auth_service.decode_token(user_token)
        let user_id = user_data.id

        await repository.update_profile(user_id, req.body)
        res.status(200).send({
            message: 'Cadastro atualizado com sucesso!',
            data: req.body.name
        })
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar cadastro',
            data: e
        })
    }
}

exports.put = async (req, res, next) => {
    try {
        let resp_check_email = await repository.get_user({ email: req.params.id })
        console.log(resp_check_email)
        if (resp_check_email === null) {
            res.status(400).send({
                message: 'Não existe nenhum usuário com esse e-mail'
            });
            return;
        }

        await repository.update(resp_check_email._id, req.body)
        res.status(200).send({
            message: 'Dado do usuário atualizado com sucesso!'
        })
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar dado do usuário',
            data: e
        })
    }

};

exports.delete = async (req, res, next) => {
    try {
        let resp_check_email = await repository.get_user({ email: req.params.id })
        if (resp_check_email === null) {
            res.status(400).send({
                message: 'Não existe nenhum usuário com esse e-mail'
            });
            return;
        }
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        })
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover produto',
            data: e
        })
    }
};