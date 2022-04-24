// node
const path = require('path')
// express
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path.js')

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // ici le contenu n'aura lieu que si on arrive depuis une POST donc pas de redirection si on tape l'url dans la barre
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
