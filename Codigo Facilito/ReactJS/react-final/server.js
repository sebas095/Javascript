/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

// server
const express = require('express');
const http = require('http');
const engine = require('socket.io');

const port = 3000;
const app = express();

let data = [
  {id: 1, author: 'Cosa uno', text: 'Comentario'},
  {id: 2, author: 'Cosa dos', text: 'Comentario'}
];

const server = http.createServer(app).listen(port, () => {
  console.log('El servidor esta escuchando en el puerto ' + port);
});

const io = engine.listen(server);
io.on('connection', (socket) => {
  socket.on('read', () => {
    io.emit('data', data);
  });

  socket.on('sign', (sign) => {
    data.unshift(sign);
    io.emit('data', data);
  });
});
// server-end

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
let isInitialCompilation = true;

const compiler = webpack(config);

new WebpackDevServer(compiler, config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});

compiler.plugin('done', () => {
  if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
      console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
    }, 350);
  }
  isInitialCompilation = false;
});
