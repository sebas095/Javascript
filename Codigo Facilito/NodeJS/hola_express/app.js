var express = require('express');
var app = express();
//app.set("view engine", "jade");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  //res.render("index1", {hola: "Hola Sebastian"});
  res.render("index2", {hola: "Hola Sebastian"});
  //res.send("Hola Mundo");
});

// puerto, host, callback
app.listen(8080);
