'use strict'

const mongoose = require('mongoose');
const Account = mongoose.model('Account');

exports.get = (req, res, next) => {
    Account
        .find({})
        .then(x => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.getById = (req, res, next) => {
    Account
        .findOne({ account_id: id })
        .then(x => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        });
}

exports.put = (req, res, next) => {
    let id = req.params.id;

    Account.findOneAndUpdate({ account_id: id },  
       {
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf,
            address: req.body.address,
            phone: req.body.phone
        }, function(err, p) {
            if (err) {
                console.log(err)
                res.status(400).send();
            }
            else {
                console.log('Conta atualizada original: ', p);
                res.status(200).send();
            }
        }
    )
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    Account.findOneAndRemove({account_id:id}, function(err) {
        if (err) {
            console.log(err)
            res.status(400).send();
        }
        else {
            console.log('Conta removida com sucesso!');
            res.status(200).send();
        }
    })
}