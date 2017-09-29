var express = require('express');
var router = express.Router();
var _ = require('lodash');
var database= require('./database');

router.post('/sign', function(req, res) {
    if (req.body.action === 'signin') {
        database.checkLogin(req.body.email, req.body.password, function(value) {
            if (value) {
                req.session.username = req.body.email;
            }
            res.redirect('/');
        });
    } else if (req.body.action === 'signup') {
        database.signup(req.body.email, req.body.password, function() {
            req.session.username = req.body.email;
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
});

router.use(function(req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.render('login');
    }
});

router.get('/logout', function(req, res) {
    delete req.session.username;
    res.redirect('/');
});

router.get('/', function(req, res) {
    database.getList(req.session.username, function(err, obj) {
        var items = _.map(obj, function(value, id) {
            return {
                id: id,
                value: value
            };
        });
        res.render('list', {
            items: items
        });
    });
});

router.post('/', function(req, res) {
    database.addItem(req.session.username, req.body.newItem, function() {
        res.redirect('/');
    });
});

router.get('/delete/:id', function(req, res) {
    database.removeItem(req.session.username, req.params.id, function() {
        res.redirect('/');
    });
});

module.exports = router;
