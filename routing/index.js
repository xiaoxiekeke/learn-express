var express = require('express');
var app = express();

app.get('/', function(request, response, next) {
    console.log(1);
    // next();
    next('route');
}, function(request, response, next) {
    console.log(2);
    next('route');
});

app.get('/', function(request, response, next) {
    console.log(3);
    next();
}, function(request, response, next) {
    console.log(4);
    response.send('hello world\n');
});

app.get(/^\/mobile\/1\d{10}$/, function(request, response, next) {
    console.log(5);
    response.send('This is a mobile phone number');
});
// 18803401234

function ckeckValidation () {
    // chekcing
    return [];
}

app.param('listname', function(request, response, next, listname) {
    console.log('params');
    console.log(listname);
    // do some checking
    request.list = ['item0', 'item1', 'item2'];
    next();
});

app.get('/list/:listname', function(request, response, next) {
    console.log(6);
    // var listname = request.params.listname;
    // response.send('This is ' + listname);
    response.send('list:\n' + request.list.join(' '));
});
app.get('/list/:listname/:id', function(request, response, next) {
    console.log(7);
    var listname = request.params.listname,
        id = request.params.id;

    response.send(request.list[id]);
});





app.listen(1234, 'localhost');
