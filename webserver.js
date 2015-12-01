"use strict";

var http = require('http');
 
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello, Jax ARC SIG!');
}).listen(3000);