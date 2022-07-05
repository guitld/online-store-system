'use scrict'

const express     = require('express');
const body_parser = require('body-parser');
const mongoose    = require('mongoose');
const config      = require('./config');
const cors        = require('cors');

const app = express();
app.use(cors());

const router = express.Router();

mongoose.connect(config.connectioString);

app.use(body_parser.json({
    limit: '5mb'
}));
app.use(body_parser.urlencoded({ 
    extended: false 
}));

const Product  = require('./models/products');
const Customer = require('./models/customer');

const index_route    = require('./routes/index');
const products_route = require('./routes/products');
const customer_route = require('./routes/customer');

app.use('/', index_route);
app.use('/products', products_route);
app.use('/customers', customer_route)

module.exports = app;