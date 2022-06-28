'use scrict'

const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const router = express.Router();

app.use(cors({
    origin: '*'
}));

// mongoose.connect('mongodb://localhost:27017');
mongoose.connect('mongodb://localhost:27017',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

const Product = require('./models/products');

const index_route = require('./routes/index');
const products_route = require('./routes/products')

app.use('/', index_route);
app.use('/products', products_route);

module.exports = app;