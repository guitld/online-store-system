'use scrict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const auth_service = require('../services/auth-service');

router.get('/', auth_service.authorize, controller.get_user_data);
router.post('/sign-up', controller.post);
router.get('/authenticate_token', controller.authenticate_token);
router.post('/authenticate', controller.authenticate);
// router.post('/refresh-token', auth_service.authorize, controller.refresh_token);

router.post('/add-to-cart', auth_service.authorize, controller.add_to_cart);
router.put('/remove-from-cart', auth_service.authorize, controller.remove_from_cart);

router.put('/update-customer', auth_service.authorize, controller.update_customer)

// Funcionalidades de administrador - rotas de atualização e remoção de usuarios
router.put('/:id', auth_service.is_admin, controller.put);
router.delete('/admin/:id', auth_service.is_admin, controller.delete);

module.exports = router;