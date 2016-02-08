// Modulo para servir archivos estaticos
const path = require('path');
const st = require('st');

// Definimos nuestra carpeta estatica
const mount = st({
  path: path.join(__dirname, '..', 'public'),
  index: 'index.html'
});

function onRequest(req, res) {
  mount(req, res, (err) => {
    if (err) return res.end(err.message);
    res.statusCode = 404;
    res.end(`Not Found: ${req.url}`);
  });
}

module.exports = onRequest;
