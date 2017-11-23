var express = require('express');
var app = express();
var router = express.Router();
var news = require('../models/news.js');

var path = require('path');

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
})
module.exports = router;