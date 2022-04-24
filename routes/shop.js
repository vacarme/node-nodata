const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path.js')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html')) // remplace le ./views/shop.html sur tous les os --dirname pointe vers le dossier courant la ou il est écrit
})

module.exports = router
