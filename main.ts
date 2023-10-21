import http = require('http');
import * as fs from 'fs';
const port = 3000;
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('Error: File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);

server.on('error', (e) => {
  console.log('server error', e);
});
server.on('connection', (e) => {
  console.log('someone connected', e);
});
