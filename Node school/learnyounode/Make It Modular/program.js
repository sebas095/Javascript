var filtered = require('./mymodule');
var dir = process.argv[2]
var ext = process.argv[3]

filtered(dir, ext, (err, files) => {
  if (err) return console.error('There was an error:', err);
  for (var i in files) console.log(files[i]);
});
