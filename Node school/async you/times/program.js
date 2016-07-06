const http = require('http');
const async = require('async');
const port = process.argv[3];
const hostname = process.argv[2];
const url = 'http://' +  hostname + ':' + port;

function addUser(id, next) {
  var opts = {
    hostname: hostname,
    port: port,
    path: '/users/create',
    method:'POST'
  };

  var postData = JSON.stringify({"user_id": id});
  var req = http.request(opts, function(res) {
    res.on('data', function(chunk) {});
    res.on('end', function() {
      next();
    });
  });

  req.on('error', function(err) {
    next(err);
  });

  req.end(postData);
}

async.series({
  post: function(done) {
    async.times(5, function(data, next) {
      addUser(++data, function(err) {
        next();
      });
    }, function next(err) {
      if (err) return done(err);
      done(null, 'saved');
    });
  },
  get: function(done) {
    var body = "";
    http.get(url + '/users', function(res) {
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
}, function(err, results) {
  if (err) return console.error(err);
    console.log(results.get);
});
