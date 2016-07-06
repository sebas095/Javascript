const HTTP = require("q-io/http");
const url = 'http://localhost:1337';

HTTP
  .read(url)
  .then(JSON.parse)
  .then(console.log)
  .catch(console.error)
  .done()
