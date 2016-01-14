var express = require("express");
var app = express();

app.get('/', (req, res) => res.send('Geeky Theory probando express.js'));

app.listen(8000);
console.log("Listen Port");
