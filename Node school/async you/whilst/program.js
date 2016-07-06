const http = require('http');
const async = require('async');
var body = "";
var count = 0;

async.whilst(
  function() {
    return (body.trim() != "meerkat");
  },

  function(done) {
    count++;
    body = "";
    http.get(process.argv[2], function(res) {
      res.on('data', function(chunk) {
        body += chunk.toString();
      });
      res.on('error', function(err) {
        done(err, null);
      });
      res.on('end', function() {
        done(null, count);
      });
    });
  },
  
  function(err, n) {
    if (err) return console.error(err);
    console.log(n);
  }
);
