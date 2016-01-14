function init(route, manejador) {
  var http = require('http').createServer();
  var url = require('url');

  function control(req, res) {
    var pathName = url.parse(req.url).pathname;
    console.log('Petición recibida');
    route(manejador, pathName, res);
    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.write('Peticion recibida en el servidor');
    // res.end();
  }

  http.on('request',control).listen(8080);
  console.log('Servidor inicializado');
};

exports.init = init;
