const express = require('express')
const routes = require('./routes')
const server = express()
const cors = require('cors');
server.use(cors())
server.use(express.json())
server.use(routes)

server.listen('3333', () => {
  console.log('Server is running!')
})

