'use strict';

const mongoose = require('mongoose');
const nodemon = require('nodemon');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    price: {
        type: Number,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true
    },
    sold_quantity: {
        type: Number,
        required: true
    },
    stock_quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    product_class: {
        type: String,
        required: true
    } 
});

module.exports = mongoose.model('Product', schema);