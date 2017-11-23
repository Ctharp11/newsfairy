var connection = require('./connection.js');

var orm = {
    all: function(table){
        connection.query('SELECT * from search', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
          });
    },

    post: function(table){
        connection.query("INSERT INTO search (news_source, topic, date) VALUES ('CNN', 'Texas', NOW())");
    }
}

module.exports = orm;