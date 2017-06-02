var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 3000;

var app = require('express')();
var bodyParser = require('body-parser');

// add a new middleware to your application with the help of BodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/api/test', function(req, res){
//   res.send("hello")

    'use strict';

    var os = require('os');
    var ifaces = os.networkInterfaces();

    Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
        }

        if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
        res.send(ifname + ':' + alias, iface.address)
        } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
        res.send((ifname, iface.address))
        }
        ++alias;
    });
    });

    res.send()

})

app.listen(port, function(){
  console.log("listening on port", port)
})

module.exports = app;