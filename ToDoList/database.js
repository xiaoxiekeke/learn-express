'use strict';
var redis = require('redis'),
    uuid = require('node-uuid'),
    Promise = require('promise'),
    client,
    clientPromise = new Promise(function(resolve, reject) {
        client = redis.createClient();
        client.on('ready', function(err){
            if(!err) {
                resolve();
            } else {
                reject();
            }
        });
    });

function checkLogin(userId, password, cb) {
    return client.hget('_user', userId, function(err, value) {
        cb(value === password);
    });
}

function signup(userId, password, cb) {
    return client.hset('_user', userId, password, cb);
}

function getList(userId, cb) {
    client.hgetall(userId, cb);
}

function addItem(userId, newItem, cb) {
    var id = uuid.v1();

    client.hset(userId, id, newItem, cb);
}

function removeItem(userId, id, cb) {
    client.hdel(userId, id, cb);
}

module.exports = {
    clientPromise: clientPromise,
    checkLogin: checkLogin,
    getList: getList,
    addItem: addItem,
    removeItem: removeItem,
    signup: signup
}
