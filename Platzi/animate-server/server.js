'use strict'

// Requires
const http = require('http');
const fs = require('fs');
const path = require('path');

// Server
const port = process.env.PORT || 8080;
const server = http.createServer();

// Responses
var serveIndex = (res) => {
  let index = path.join(__dirname, 'public', 'index.html');

  // Creamos un RS para leer de manera eficiente el archivo
  // El RS pasa los datos a res cada que tenga algo en el buffer del archivo
  let rs = fs.createReadStream(index);
  res.setHeader('Conten-Type','text/html');
  rs.pipe(res);

  rs.on('error', (err) => {
    res.setHeader('Conten-Type','text/plain');
    res.end(err.message);
  });
}

var serveApp = (res) => {
  let app = path.join(__dirname, 'public', 'app.js');
  let rs = fs.createReadStream(app);

  res.setHeader('Conten-Type','text/javascript');
  rs.pipe(res);

  rs.on('error', (err) => {
    res.setHeader('Conten-Type','text/plain');
    res.end(err.message);
  });
}

// Callbacks
var onRequest = (req, res) => {
  let url = req.url;
  if (url.startsWith('/index') || url === '/') return serveIndex(res);
  if (url === '/app.js')                       return serveApp(res);

  res.statusCode = 404;
  res.end(`404 Not Found: ${url}`);
}

var onListening = () => console.log(`Listening on port ${port}`);

// Event Emiters
server.on('request', onRequest);
server.on('listening', onListening);

// Listen port
server.listen(port);
