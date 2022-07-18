const express = require('express');
const users = require('../src/data/users.json');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json(users);
});

routes.post('/add', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    };

    users.push(body)
    return res.json(users);
});

module.exports =  routes;