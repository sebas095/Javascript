'use strict';

// Modulo para servir archivos estaticos
const path = require('path');
const course = require('course');
const st = require('st');
const router = course();
const jsonBody = require('body/json');
const animateClient = require('animate-client');
const helper = require('../helper');

// Definimos nuestra carpeta estatica
const mount = st({
  path: animateClient,
  index: 'index.html',
  passthrough: true
});


function onRequest(req, res) {
  if (req.url.startsWith('/socket.io')) return;
  mount(req, res, (err) => {
    if (err) return fail(err, res);

    router(req, res, function(err) {
      if (err) return fail(err, res);

      res.statusCode = 404;
      res.end(`Not Found: ${req.url}`);
    });
  });
}

function fail(err, res) {
  res.statusCode = 500;
  res.setHeader('Content-Type', 'text/plain');
  res.end(err.message);
}

module.exports = onRequest;
