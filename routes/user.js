const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Lista todos os usuários
router.get('/', usersController.getAllUsers);

// Formulário para adicionar um novo usuário
router.get('/new', (req, res) => {
    res.render('newUser');
});

// Cria um novo usuário
router.post('/', usersController.createUser);

// Formulário para editar um usuário existente
router.get('/:id', usersController.getUserById);

// Atualiza um usuário existente
router.post('/:id', usersController.updateUser);

// Deleta um usuário existente
router.post('/:id/delete', usersController.deleteUser);

module.exports = router;
