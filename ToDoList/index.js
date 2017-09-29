var express = require('express');
var session = require('express-session');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var RedisStore = require('connect-redis')(session);
var app = express();
var router = require('./router');
var database = require('./database');

app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: '6379'
    }),
    secret: 'maiziedu'
}));

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', 'views');
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

database.clientPromise.then(function() {
    app.use(router);
    app.listen(1234, 'localhost');
    console.log('All set');
});


