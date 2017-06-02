var internalIp = require('internal-ip');

var v4 = internalIp.v4();
var v6 = internalIp.v6();

console.log("helloooo", v4, v6)

var v4Node = document.createElement("P")
var v6Node = document.createElement("P")

v4Node.innerHTML = "IPv4: " + v4
v6Node.innerHTML = "IPv6: " + v6

document.body.appendChild(v4Node)
document.body.appendChild(v6Node)