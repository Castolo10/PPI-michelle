const { Router } = require('express');

// const usersCtrl = require('../controllers/users');
// const dateMidd = require('../middleware/index');

const router = Router();

// LogIn UsuariosAdmin

router.get('/', (req, res) => {
    res.send('es el login');
});

router.get('/', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: 1,
            username: req.body.username,
            password: req.body.password,
        },
    };
    res.send(json);
});

module.exports = router;
