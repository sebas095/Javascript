var fs = require('fs');
var path = process.argv[2];

var rf = fs.readFile(path, 'utf8', function(error, data) {
  if (error) {
    return console.error();
  }
  var str = data.toString().split("\n");
  console.log(str.length - 1);
});
