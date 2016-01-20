var http = require('http');
var url = require('url');
var port = process.argv[2];

function parseTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function unixTime(date) {
  return {
    unixtime : date.getTime()
  }
}

var server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);
  var ans = null;

  // Verifica si hay match con la url dada
  if ((/^\/api\/parsetime/).test(req.url))     ans = parseTime(date);
  else if ((/^\/api\/unixtime/).test(req.url)) ans = unixTime(date);

  if (ans) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(ans));
  }
  else {
    res.writeHead(400);
    res.end('File Not Found');
  }
});

server.listen(port);
