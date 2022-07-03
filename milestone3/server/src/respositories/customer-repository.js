'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async (data) => {
    let customer = new Customer(data);
    await customer.save();
}

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });

    return res;
}

exports.get_by_id = async (id) => {
    const res = await Customer.findOne(id);
    return res;
}

exports.get_user = async (obj_check) => {
    const res = await Customer.findOne(obj_check);
    return res;
}