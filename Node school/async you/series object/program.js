const http = require('http');
const async = require('async');
var url1 = process.argv[2];
var url2 = process.argv[3];

async.series({
  requestOne: function(done) {
    fetchUrl(url1, done);
  },
  requestTwo: function(done) {
    fetchUrl(url2, done);
  }
}, function(err, results) {
  if (err) return console.error(err);
  console.log(results);
});

function fetchUrl(url, done) {
  http.get(url, function(res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk.toString();
    });
    res.on('error', function(err) {
      done(err, null);
    });
    res.on('end', function() {
      done(null, body);
    });
  });
}
