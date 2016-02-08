'use strict'

// Requires
const http = require('http');
const fs = require('fs');
const path = require('path');

// Server
const port = process.env.PORT || 8080;
const server = http.createServer();

// Callbacks
var onRequest = (req, res) => {
  let fileName = path.join(__dirname, 'public', 'index.html');
  fs.readFile(fileName, (err, file) => {
    if (err) return res.end(err.message);
    res.setHeader('Content-Type', 'text/html');
    res.end(file);
  });
}

var onListening = () => console.log(`Listening on port ${port}`);

// Event Emiter
server.on('request', onRequest);
server.on('listening', onListening);

// Listen port
server.listen(port);
