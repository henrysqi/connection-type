var express = require('express');
var port = 3000;
var app = express();


app.get('/api/test', function(req, res){
    res.send("hello")
})

app.get('/api/ip', function(req, res){
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
  console.log("listening on port: ", port)
})

module.exports = app;