require('newrelic');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});