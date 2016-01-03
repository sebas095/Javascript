var http = require('http');
var fs = require('fs');
var parser = require('./params_parser.js').parse;
var render = require('./render_view.js').render;

http.createServer(function(req, res) {
  if (req.url.indexOf("favico.ico") > 0)
    return;

  fs.readFile("./index.html", function(err, html) {
    var html_string = html.toString();
    var parametros = parser(req);
    var page = render(html_string, parametros);

    res.writeHead(200, {"Content-Type": "text/html" });
    res.write(page);
    res.end();
  });
}).listen(8080);
