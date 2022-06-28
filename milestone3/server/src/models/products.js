'use strict';

const mongoose = require('mongoose');
// const nodemon = require('nodemon');
const Schema = mongoose.Schema;

const schema = new Schema({
    product_id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    qtd: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Product', schema);