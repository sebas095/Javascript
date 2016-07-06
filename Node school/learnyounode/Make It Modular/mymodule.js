var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err, null);

    files = [];
    for (var i in list) {
      if (path.extname(list[i]) === '.' + ext)
        files.push(list[i]);
    }

    callback(null, files);
  });
};
