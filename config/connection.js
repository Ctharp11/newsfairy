var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'news_fairy'
  });
   
  connection.connect();
   
  connection.query('SELECT * from search', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  connection.query("INSERT INTO search (news_source, topic, date) VALUES ('CNN', 'Texas', NOW())");
   
//   connection.end();