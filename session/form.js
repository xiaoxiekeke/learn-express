var express = require('express');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.engine('hbs', hbs());

app.set('view engine', 'hbs');
app.set('views', 'templates');


var userArr = ['changran', 'maiziedu'];

app.use(session({
    secret: 'maiziedu'
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
    var username = request.session.username;
    if (username) {
        response.send('Hello ' + username);
    } else {
        response.render('form');
    }
});

app.post('/', function(request, response) {
    console.log(request.body.username);
    console.log(request.body.password);
    if (userArr.indexOf(request.body.username) >= 0) {
        request.session.username = request.body.username;
    } else {
        request.session.destroy();
    }
    response.redirect('/');
});

app.listen(1234, 'localhost');
