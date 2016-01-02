var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile("./index.html", function(err, html) {
    var html_string = html.toString();

    // Expresión regular que busca en el HTML donde haya {x}
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "Sebastian";

    // variables ['nombre']
    for (var i = 0; i < variables.length; i++) {
      // Lo ejecutamos como código javascript
      // Para obtener el valor de dicha variable
      var value = eval(variables[i]);

      // Reemplazar el contenido con llaves {x} por su valor correspondiente
      html_string = html_string.replace("{" + variables[i] + "}", value);
    }

    // Mandamos el contenido
    res.writeHead(200, {"Content-Type": "text/html" });
    res.write(html_string);
    res.end();
  });
}).listen(8080);
