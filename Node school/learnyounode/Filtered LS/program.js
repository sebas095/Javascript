var fs = require('fs');
var path = require('path')
var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function(error, lista) {
  if (error) return console.error();
  for (var index in lista) {
    if (path.extname(lista[index]) == ext)
      console.log(lista[index]);
  }
});
