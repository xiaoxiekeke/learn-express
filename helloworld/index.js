var express = require('express');
var app = express();

app.use('/static' ,express.static(__dirname + '/public'));

// logger
app.use(function(request, response, next) {
    console.log("Incoming Request " + request.method + ' to ' + request.url);
    if (request.url === '/') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("This is home!\n");
    } else {
       next();
    }
});

app.use(function(request, response, next) {
    if (request.url === '/about') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("This is maizi.edu!\n");
    } else {
       next();
    }
});

app.use(function(request, response, next) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 not found!\n");
});

app.listen(1234, 'localhost');
