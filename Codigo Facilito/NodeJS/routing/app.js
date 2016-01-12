var express = require('express');
var app = express();

app.set("view engine", "jade");

// Verbos Http => GET / POST / PUT / DELETE / PATCH / OPTIONS / HEADERS
// Arquitectura REST

app.get('/', (req, res) => res.render("index"));
app.get('/:nombre', (req, res) => {
  // console.log(req.params.nombre);
  res.render("form", {nombre: req.params.nombre});
});

app.post('/', (req, res) => res.render("form"));

// puerto, host, callback
app.listen(8080);
