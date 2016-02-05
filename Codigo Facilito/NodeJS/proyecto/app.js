var express = require('express');
var bodyParser = require('body-parser'); // Permite extraer parametros del html como form, etc
var app = express();
var partials = require('express-partials');
var User = require('./models/user').User;
// var expressLayouts = require('express-ejs-layouts');

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
  // documento => instancia del modelo
  var user = new User({
    email: req.body.email,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation,
    username: req.body.username
  });

  console.log(user.password_confirmation);

  /*user.save((err, user, numero) => {
    if (err) console.log(String(err));
    res.send("Guardamos tus datos.");
  });*/

  // Promises ECS6
  user.save().then((user) => {
    res.send("Guardamos el usuario exitosamente");
  },
  (err) => {
    console.log(String(err));
    res.send("No pudimos guardar la información.");
  });

});

app.listen(8080);
