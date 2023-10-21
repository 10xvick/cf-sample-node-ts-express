"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http
    .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Error: File not found');
        }
        else {
            res.write(data);
        }
        res.end();
    });
})
    .listen(port);
server.on('error', function (e) {
    console.log('server error', e);
});
server.on('connection', function (e) {
    console.log('someone connected', e);
});
