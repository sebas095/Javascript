var express = require('express');
var bodyParser = require('body-parser'); // Permite extraer parametros del html como form, etc
var app = express();
var partials = require('express-partials');
// var expressLayouts = require('express-ejs-layouts');

//app.set("view engine", "jade");
app.set("view engine", "ejs");
// app.set("layout", "layout");

app.use(partials());
app.use(bodyParser.json()); // Para peticiones application/json
app.use(bodyParser.urlencoded({extended: true})); // Si es true permite parsear arreglos y mas
app.use("/estatico",express.static('public'));
app.use(express.static('assets'));
// app.use(expressLayouts);

// Gets
app.get("/", (req, res) => res.render("index"));

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/users", (req, res) => {
  console.log("Contraseña: " + req.body.password);
  console.log("Email: " + req.body.email);
  res.send("Recibimos tus datos.");
});

app.listen(8080);
