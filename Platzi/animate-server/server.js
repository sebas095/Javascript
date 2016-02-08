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
  let index = path.join(__dirname, 'public', 'index.html');

  // Creamos un RS para leer de manera eficiente el archivo
  // El RS pasa los datos a res cada que tenga algo en el buffer del archivo
  let rs = fs.createReadStream(index);
  rs.pipe(res);

  rs.on('error', (err) => {
    res.end(err.message);
  });
}

var onListening = () => console.log(`Listening on port ${port}`);

// Event Emiter
server.on('request', onRequest);
server.on('listening', onListening);

// Listen port
server.listen(port);
