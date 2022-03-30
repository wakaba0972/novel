const express = require('express');
const crawler = require('./crawler.js')

var app = express()
    .use(express.json({limit : '50000kb'}))
    .get('/', (req, res)=> {
        crawler.getK('n', 1)
        .then(data=> res.send(data))
    })
    .listen(3000)