var express = require('express');
var app = express();


var bodyParser = require("body-parser");
var news = require('./models/news')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/views"));

require("./controllers/routes.js")(app);
// var routes = require("./controllers/routes.js")(app);
// app.use('/', routes);


var port = process.env.PORT || 3002

app.listen(port, function(){
    console.log("Listening on", port);
});









