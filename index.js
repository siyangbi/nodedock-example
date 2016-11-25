const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'root',
  database : 'nodedock'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();


var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'elasticsearch:9200',
  log: 'trace'
});

client.search({
  q: 'pants'
}).then(function (body) {
  console.log('ElasticSearch connected');
}, function (error) {
  console.trace(error.message);
});

app.get('/', (req, res) => (
  res.send('Hello World')
));

module.exports = app;
