const express = require('express');
const server = express()
const users = require('./src/data/users.json')

server.get('/', (req, res) => {
    return res.json(users)
})

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
})