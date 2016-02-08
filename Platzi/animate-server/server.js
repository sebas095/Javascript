'use strict'

// Requires
const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router');

// Server
const port = process.env.PORT || 8080;
const server = http.createServer();

// Callbacks
var onListening = () => console.log(`Listening on port ${port}`);

// Event Emiters
server.on('request', router);
server.on('listening', onListening);

// Listen port
server.listen(port);
