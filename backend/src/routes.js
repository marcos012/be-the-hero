const express = require('express');

const routes = express.Router();

routes.get('/users/:id', (req, res) => {
    const params = req.params;

    return res.json({event: 'a'})
});

module.exports = routes;