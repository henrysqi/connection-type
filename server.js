var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 3000;

var app = require('express')();
var bodyParser = require('body-parser');

// add a new middleware to your application with the help of BodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/api/test', function(req, res){
  console.log('@@@@', req.body)
  res.send("hello")
})

app.listen(port, function(){
  console.log("listening on port", port)
})

module.exports = app;