'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async  () => {
    const res = await Product.find({}, 'title price slug');
    return res;
}

exports.get_by_slug = async (slug) => {
    const res = await Product.findOne({slug: slug});
    return res;
}

exports.get_by_id = async (id) => {
    const res = await Product.findById(id);
    return res; 
}

exports.get_by_category = async (category) => {
    const res = await Product.find({category: category}, 'title description price slug product_class img');
    return res;
}

exports.create = async (data) => {
    let product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug,
                img: data.img,
                sold_quantity: data.sold_quantity,
                stock_quantity: data.stock_quantity,
                category: data.category,
                product_class: data.product_class
            }
        })
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id)
}

exports.update_product = async (id, body) => {
    console.log(body);
    await Product.findByIdAndUpdate(id, {
        $set: body
    });

    console.log(await Product.findById(id))
}