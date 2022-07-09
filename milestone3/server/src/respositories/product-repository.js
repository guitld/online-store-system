'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product.find({}, 'title price slug');
    return res;
}

exports.get_by_slug = async (slug) => {
    const res = await Product.findOne({ slug: slug });
    return res;
}

exports.get_by_id = async (id) => {
    const res = await Product.findById(id);
    return res;
}

exports.get_by_category = async (category) => {
    const res = await Product.find({ category: category }, 'title description price slug product_class img');
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
            slug: data.slug
        }
    })
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id)
}