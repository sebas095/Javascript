var express = require('express');
var app = express();

app.set("view engine", "jade");

// Gets
app.get("/", (req, res) => res.render("index"));
app.get("/login", (req, res) => res.render("login"));

app.listen(8080);
