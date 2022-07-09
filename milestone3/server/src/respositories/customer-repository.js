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

exports.update_cart = async (id, product_id, quantity) => {
    const user = await Customer.findOne( { _id: id });
    let shopping_cart = user.shopping_cart;
    // console.log(typeof(shopping_cart));

    shopping_cart.push({ product: id, quantity: quantity});

    // console.log('Element');
    // shopping_cart.forEach((element) => {
    //     if (element.product === product_id) {
    //         element.quantity = quantity;
    //     }
    // })

    const res = await Customer.findOneAndUpdate({ _id: id }, { $push: { shopping_cart : shopping_cart }});
    console.log('Res: ', res);
}

exports.update_profile = async(id, data) => {
    await Customer.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            cpf: data.cpf,
            phone: data.phone,
            address: data.address,
            password: data.password,
            is_admin: data.is_admin,
            shopping_cart: data.shopping_cart   
        }
    })
}