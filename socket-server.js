/**
 * Created by robin on 29/08/15.
 */

'use strict';

var sessions = require('./app/utils/sessions');
//var server = require('./server').server;
var Primus = require('primus');

module.exports = function (server) {
    var primus = new Primus(server, {
        transformer: 'engine.io',
        pathname: 'sockets'//,
        //origins: 'localhost',
        //methods: 'get'
    });

    primus.on('connection', function (connection) {
        var session = sessions.createSession(connection);
        connection.write({ sessionId: session.sessionId });
    });

    //module.exports = primus;

    // Generate the client side library
    primus.save(__dirname +'/public/javascripts/primus.js', function save(err) {
        if (err) {
            console.trace(err);
        }
        else {
            console.log('primus client library ready');
        }
    });

    return primus;
};
