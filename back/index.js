const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const server = express()
const routes = require('./config/routes')

server.use(morgan('dev'))
server.use(bodyParser.urlencoded({extended: false}))
server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(3001, () => {
    console.log('Servidor está funcionando...')
})