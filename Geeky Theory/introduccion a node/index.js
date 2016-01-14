// Import scripts
var server = require('./servidor');
var router = require('./router')
var manejadores = require('./manejador');
var manejador = {};

manejador["/"] = manejadores.funcion_1;
manejador["/funcion_1"] = manejadores.funcion_1;
manejador["/funcion_2"] = manejadores.funcion_2;

server.init(router.route, manejador);
