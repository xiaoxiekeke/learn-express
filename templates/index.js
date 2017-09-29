var express = require('express');
var hbs = require('express-handlebars');
var app = express();

app.engine('hbs', hbs());

app.set('view engine', 'hbs');
app.set('views', 'templates');


app.get('/handlebar', function(request, response, next) {
    response.render('handlebar');
});
app.get('/jade', function(request, response, next) {
    response.render('index.jade');
});

app.listen(1234, 'localhost');
