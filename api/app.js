const express = require('express')
const path = require('path');
const app = express()
// require our router from ./src/router
const router = require('./src/router');

const pathToIndex = path.resolve(__dirname, '../client/index.html')

app.use('/',router)

//call app.use() again, passing it express.static() as its only argument
app.use(express.static(path.resolve(__dirname, 'uploads')))

app.use("/*", (req, res) => {
    res.sendFile(pathToIndex)
}),

module.exports = app;