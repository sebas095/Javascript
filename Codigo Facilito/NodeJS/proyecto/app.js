var express = require('express');
var bodyParser = require('body-parser'); // Permite extraer parametros del html como form, etc
var app = express();
var partials = require('express-partials');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var expressLayouts = require('express-ejs-layouts');

mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
  email: String,
  password: String
};

var user_schema = new Schema(userSchemaJSON);
var User = mongoose.model("User", user_schema);

app.set("view engine", "jade");
// app.set("view engine", "ejs");
// app.set("layout", "layout");

app.use(partials());
app.use(bodyParser.json()); // Para peticiones application/json
app.use(bodyParser.urlencoded({extended: true})); // Si es true permite parsear arreglos y mas
app.use("/estatico",express.static('public'));
app.use(express.static('assets'));
// app.use(expressLayouts);

// Gets
app.get("/", (req, res) => res.render("index1"));

app.get("/login", (req, res) => {
  User.find((err, doc) => {
    console.log(doc);
    res.render("login1");
  });
});

app.post("/users", (req, res) => {
  var user = new User({email: req.body.email, password: req.body.password});

  user.save(() => {
    res.send("Guardamos tus datos.");
  });

});

app.listen(8080);
