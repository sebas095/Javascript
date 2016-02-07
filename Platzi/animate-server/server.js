'use strict'

// Requires
const http = require('http');

// Server
const port = process.env.PORT || 8080;
const server = http.createServer();

// Callbacks
var onRequest = (req, res) => res.end("Hola io.js");
var onListening = () => console.log(`Listening on port ${port}`);

// Event Emiter
server.on('request', onRequest);
server.on('listening', onListening);

// Listen port
server.listen(port);
