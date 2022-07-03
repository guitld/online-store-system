'use scrict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const auth_service = require('../services/auth-service');

router.post('/sign-up', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', auth_service.authorize, controller.refresh_token);

module.exports = router;