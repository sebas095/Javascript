const http = require('http');
const async = require('async');
const url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function(prev, item, done) {
  http.get(url + '?number=' + item, function(res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk.toString();
    });
    res.on('error', function(err) {
      done(err, null);
    });
    res.on('end', function() {
      done(null, prev + Number(body));
    });
  });
}, function(err, results) {
  if (err) return console.error(err);
  console.log(results);
});
