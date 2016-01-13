var express = require('express');
var app = express();

// app.set("view engine", "jade");
app.set("view engine", "ejs");

// Verbos Http => GET / POST / PUT / DELETE / PATCH / OPTIONS / HEADERS
// Arquitectura REST

app.get('/', (req, res) => res.render("index2"));
app.get('/:nombre', (req, res) => {
  // console.log(req.params.nombre);
  res.render("form2", {nombre: req.params.nombre});
});

app.post('/', (req, res) => res.render("form2", {nombre: ""}));

// puerto, host, callback
app.listen(8080);
