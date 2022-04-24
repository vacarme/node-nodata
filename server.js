// Node
const path = require('path')

// Express
const express = require('express')
// Util
const rootDir = require('./util/path.js')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const app = express()
app.use(express.urlencoded({ extended: false })) // parser pour utiliser req.body
app.use(express.static(path.join(rootDir, 'public'))) // rend static le dossier public

app.use('/admin', adminRoutes) // comme ca qu'on importe les routes externalisées, le /admin permet d'ajouter un prepath a tout ce qui y'a dans adminRoutes et dans le HTML (grosse source d'erreur)
app.use(shopRoutes)
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
app.listen(3000)
