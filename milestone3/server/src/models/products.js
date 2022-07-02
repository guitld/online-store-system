'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
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
    img: {
        type: String,
        required: true
    },
    soldQtd: {
        type: Number,
        required: true
    },
    stockQtd: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Product', ProductSchema)