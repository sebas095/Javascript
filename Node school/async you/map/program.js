const http = require('http');
const async = require('async');
const urls = process.argv.slice(2);

async.map(urls, function(url, done) {
  var body = "";
  http.get(url, function(res) {
    res.on('data', function(chunk) {
        body += chunk.toString();
    });
    res.on('end', function() {
      return done(null, body);
    });
    res.on('error', function(err) {
      done(err, null);
    });
  });
}, function(err, results) {
  if (err) return console.error(err);
  console.log(results);
});
