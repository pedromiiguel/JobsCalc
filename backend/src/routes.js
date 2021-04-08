const express = require('express')
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(('Hello world!'))
})

routes.post('/save-jobs', (req, res) => {
  const data = req.body;

  console.log(data)
})


module.exports = routes;