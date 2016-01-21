var http = require('http');
var fs = require('fs');
var path = require('path');
var directory = "/" + process.argv[2];
var file = process.argv[3] + ".html";

http.createServer((req, res) => {
  var dir = path.join(__dirname + directory, file);
  var html = fs.createReadStream(dir);
  html.pipe(res);
}).listen(8080);

console.log("Listening on PORT 8080");
