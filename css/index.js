var express = require('express');
// var stylus = require('stylus');
// var less = require('less-middleware');
var sass = require('node-sass-middleware');
var app = express();

app.use(express.static(__dirname + '/public'));
// app.use(stylus.middleware(__dirname + '/public')); // {}
// app.use(less(__dirname + '/public')); // {}

app.use(sass(__dirname + '/public')); // {}


app.listen(1234, 'localhost');
