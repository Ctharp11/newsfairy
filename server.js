var express = require('express');
var app = express();
var routes = require('./controllers/routes');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("views"));

// app.get('/', routes);


var port = process.env.PORT || 3002

app.listen(port);









