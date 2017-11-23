var express = require('express');
var app = express();


var bodyParser = require("body-parser");
var news = require('./models/news')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(__dirname + "views"));

var routes = require('./controllers/routes.js');

app.use('/', routes);


var port = process.env.PORT || 3002

app.listen(port);









