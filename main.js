const express = require('express');
const crawler = require('./crawler.js')

var app = express()
    .use(express.json({limit : '50000kb'}))
    .get('/', (req, res)=> {
        crawler.getK('n', 1)
        .then(data=> res.send(data))
        .catch(err=> console.log(err))
    })
    .listen(process.env.PORT || 3000)