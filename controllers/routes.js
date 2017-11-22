var express = require('express');
var app = express();
var routes = express.Router();

app.get('/', function(req, res){
    app.send('asdasd');
    console.log('test');
})



module.exports = routes;