var express = require('express');
var app = express();
var router = express.Router();
// var news = require('../models/news.js');
var connection = require('../config/connection.js');

var path = require('path');

var routes = function(app){

app.get('/all', function(req, res) {
    connection.query('SELECT * from search', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
})

app.post('/posts', function(req, res){
    var posts = req.body;
    console.log('posts', posts);
    connection.query("INSERT INTO search (news_source, topic, date) VALUES ('other', 'posts', NOW())");

})

app.post('/topic', function(req, res){
    var topicObj = req.body
    var topic = topicObj.topic;
    console.log("topic", topic);
    connection.query("INSERT INTO search (topic, date) VALUES ('"+topic+"', NOW())");
})

}

module.exports = routes;