const http = require('http');
const async = require('async');
var urls = [process.argv[2], process.argv[3]];

async.each(urls, function(url, done) {
    http.get(url, function(res) {
      res.on('data', function(chunk) {});
      res.on('end', function() {
        return done(null);
      });
    }).on('error', function(err) {
      done(err);
    });
  }, function(err) {
    if (err) console.log(err);
});
