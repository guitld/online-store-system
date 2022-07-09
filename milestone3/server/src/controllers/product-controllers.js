' use strict'

const repository = require('../respositories/product-repository');

exports.get = async (req,res,next) => {
    try {
        let data = await repository.get();
        console.log(data);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Falha ao processar requisição GET'});
    }
}

exports.get_by_slug = async (req, res, next) => {
    try {
        let data = await repository.get_by_slug(req.params.slug)
        res.status(200).send(data)
    } catch(err) {
        res.status(500).send({message: 'Falha ao processar GET com Slug'})
    }
}

exports.get_by_id = async (req, res, next) => {
    try {
        let data = await repository.get_by_id(req.params.id)
        res.status(200).send(data)
    } catch(err) {
        res.status(500).send({message: 'Falha ao processar GET com ID'})
    }
}

exports.get_by_category = async (req, res, next) => {
    try {
        let data = await repository.get_by_category(req.params.category)
        res.status(200).send(data)
    } catch(err) {
        res.status(500).send({message: 'Falha ao processar GET com categoria'})
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Produto cadastrado com sucesso' })
    } catch (e) {
        res.status(400).send(
            {
                message: 'Falha ao cadastrar produto',
                data: e
            })
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        })
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar produto',
            data: e
        })
    }
        
};

exports.delete = async (req, res, next) => {
    try {
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

exports.update_product = async (req, res, next) => {
    try {
        await repository.update_product(req.params.id, req.body);
        res.status(200).send({
            message: 'Estoque do produto atualizado com sucesso!'
        })
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar número de estoque do produto',
            data: e
        })
    }
}