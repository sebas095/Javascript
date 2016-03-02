'use strict'

// Requires
const http = require('http');
const path = require('path');
const router = require('./router');
const realtime = require('./realtime');

// Server
const port = process.env.PORT || 8080;
const server = http.createServer();

// Callbacks
var onListening = () => console.log(`Listening on port ${port}`);

// Event Emiters
realtime(server);
server.on('request', router);
server.on('listening', onListening);

// Listen port
server.listen(port);
