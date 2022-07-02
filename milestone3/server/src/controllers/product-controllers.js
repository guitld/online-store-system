' use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({})
        .then(x => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.getById = (req, res, next) => {
    const id = req.params.id
   
    Product
        .findOne({ product_id: id })
        .then(x => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.post = (req, res, next) => {
    const product = new Product(req.body);

    product.save(function(err) {
        if (err) {
            console.log(err)
            res.status(400).send({
                            message: 'Falha ao cadastrar produto',
                            data: e
                        });
        }
        else {
            console.log('Produto cadastrado');
            res.status(200).send();
        }
    })
}

exports.put = (req, res, next) => {
    let id = req.params.id;

    Product.findOneAndUpdate({product_id: id},  
       {
            name: req.body.name,
            description: req.body.description,
            product_id: req.body.product_id,
            price: req.body.price,
            qtd: req.body.qtd,
        }, function(err, p) {
            if (err) {
                console.log(err)
                res.status(400).send();
            }
            else {
                console.log('Produto atualizado original: ', p);
                res.status(200).send();
            }
        }
    )
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    Product.findOneAndRemove({product_id:id}, function(err) {
        if (err) {
            console.log(err)
            res.status(400).send();
        }
        else {
            console.log('Produto removido com sucesso!');
            res.status(200).send();
        }
    })
}