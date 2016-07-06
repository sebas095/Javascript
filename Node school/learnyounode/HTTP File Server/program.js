var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var path = process.argv[3];

var server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'});

  var file = fs.createReadStream(path);
  file.on('open', () => file.pipe(res));
  file.on('error', err => res.end(err));
});

server.listen(port);
