const express = require('express');
const router = require('./routes')

const app = express();
var port = process.env.PORT || 3000;
app.use('/api', router)


app.listen(port)
console.log('API por el puerto ' + port)

module.exports = app