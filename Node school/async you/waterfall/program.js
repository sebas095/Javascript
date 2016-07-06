const http = require('http');
const async = require('async');
const fs = require('fs');

async.waterfall([
  function(cb) {
    var file = process.argv[2];
    fs.readFile(file, function(err, data) {
      if (err) cb(err);
      cb(null, data.toString());
    });
  },
  function(url, cb) {
    var body = '';
    http.get(url, function(res) {
      res.on('data', function(chunk) {
        body += chunk.toString();
      });
      res.on('end', function() {
        cb(null, body);
      });
      res.on('error', function(err) {
        cb(err);
      });
    });
  }
], function(err, data) {
  if (err) return console.error(err);
  console.log(data);
});
