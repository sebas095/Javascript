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
    // 200 ok
    // >= 400 no se encontro
    // >= 300 se movio
    // >= 500 error
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write(JSON.stringify({
      nombre: "Sebastian",
      username: "sebas"
    }));
    res.end();
  });
}).listen(8080);
