'use scrict'

const express      = require('express');
const router       = express.Router();

const controller   = require('../controllers/order-controller');
const auth_service = require('../services/auth-service');

router.get('/', auth_service.authorize, controller.get);
router.post('/', auth_service.authorize, controller.post);

module.exports = router;