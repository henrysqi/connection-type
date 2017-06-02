(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}],2:[function(require,module,exports){
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
},{"internal-ip":3}],3:[function(require,module,exports){
'use strict';
var os = require('os');

var type = {
	v4: {
		def: '127.0.0.1',
		family: 'IPv4'
	},
	v6: {
		def: '::1',
		family: 'IPv6'
	}
};

function internalIp(version) {
	var options = type[version];
	var ret = options.def;
	var interfaces = os.networkInterfaces();

	Object.keys(interfaces).forEach(function (el) {
		interfaces[el].forEach(function (el2) {
			if (!el2.internal && el2.family === options.family) {
				ret = el2.address;
			}
		});
	});

	return ret;
}

function v4() {
	return internalIp('v4');
}

function v6() {
	return internalIp('v6');
}

module.exports = v4;
module.exports.v4 = v4;
module.exports.v6 = v6;

},{"os":1}]},{},[2]);
