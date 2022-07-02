'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AccountSchema = new Schema({
    account_id: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    address: { 
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Account', Accountschema)