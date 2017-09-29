var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// json
// urlencoded

app.use(cookieParser());

app.post('/test', function(request, response, next) {
    // console.log(JSON.stringify(request.query));
    console.log(request.get('content-type'));
});

app.listen(1234, 'localhost');
