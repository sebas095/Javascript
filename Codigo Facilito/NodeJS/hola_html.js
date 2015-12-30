var http = require('http');
var fs = require('fs');

// Sincrona
/*var html = fs.readFileSync("./index.html")
http.createServer(function(req, res) {
  res.write(html);
  res.end();
}).listen(8080);
*/

// Asincrona

// Se manda respuesta a la peticion cuando el archivo se haya leido totalmente
/*fs.readFile("./index.html", function(err, html) {
  if (err) throw err;
  http.createServer(function(req, res) {
    res.write(html);
    res.end();
  }).listen(8080);

});*/

// Cada que se atienda una solicitud se leera el archivo
http.createServer(function(req, res) {
  fs.readFile("./index.html", function(err, html) {
    if (err) throw err;
    res.write(html);
    res.end();
  });
}).listen(8080);
