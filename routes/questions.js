const express = require('express');
const controller = require('../controllers/questions');

const router = express.Router();

router.post('/', (req, res) => {
    const response = controller.add(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/:idQuest', (req, res) => {
    const response = controller.find(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/', (req, res) => {
    const response = controller.list(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.put('/', (req, res) => {
    const response = controller.edit(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.delete('/', (req, res) => {
    const response = controller.delete(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

module.exports = router;
