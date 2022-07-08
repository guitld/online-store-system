'use scrict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controllers');
const auth_service = require('../services/auth-service');

// Operações do usuário comum: get dos produtos
router.get('/', controller.get);
router.get('/:slug', controller.get_by_slug); // Busca por um produto específico
router.get('/category/:category', controller.get_by_category); // Busca por categoria

// Busca por id (apenas o administrador possui conhecimento do real ID no banco de dados)
router.get('/admin/:id', auth_service.is_admin, controller.get_by_id); // Como teria a mesma estrutura do get acima, devemos mudar para outra rota

// Funcionalidades de administrador - rotas de atualização, remoção e adição de produtos
router.post('/', auth_service.is_admin, controller.post);
router.put('/:id', auth_service.is_admin, controller.put);
router.delete('/admin', auth_service.is_admin, controller.delete);

module.exports = router;