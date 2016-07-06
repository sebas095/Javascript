var http = require('http');
var bl = require('bl');
var data_url = [null, null, null];
var cont = 0;

function scanner(index, callback) {
  http.get(process.argv[index], res => {
    res.pipe(bl((err, data) => {
      if (err) return callback(err);
      callback(err, index - 2, data.toString());
    }));
  });
}

for (var i = 2; i < 5; i++) {
  scanner(i, (err, i, data) => {
    if (err) console.error(err);
    data_url[i] = data;
    cont++;

    if (cont == 3)
      data_url.forEach(data => console.log(data));
  });
}
