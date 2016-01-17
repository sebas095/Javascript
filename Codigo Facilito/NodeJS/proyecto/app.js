var express = require('express');
var app = express();
var partials = require('express-partials');
// var expressLayouts = require('express-ejs-layouts');

// app.set("view engine", "jade");
app.set("view engine", "ejs");
// app.set("layout", "layout");

app.use(partials());
// app.use(expressLayouts);

// Gets
app.get("/", (req, res) => res.render("index"));
app.get("/login", (req, res) => res.render("login"));

app.listen(8080);
