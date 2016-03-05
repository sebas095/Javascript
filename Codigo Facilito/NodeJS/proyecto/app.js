var express = require('express');
var bodyParser = require('body-parser'); // Permite extraer parametros del html como form, etc
var partials = require('express-partials');
var User = require('./models/user').User;
var session = require('express-session');
var router_app = require('./routes_app');
var session_middleware = require('./middlewares/session');
// var expressLayouts = require('express-ejs-layouts');

var app = express();

app.set("view engine", "jade");
// app.set("view engine", "ejs");
// app.set("layout", "layout");

app.use(partials());
app.use(bodyParser.json()); // Para peticiones application/json
app.use(bodyParser.urlencoded({extended: true})); // Si es true permite parsear arreglos y mas
app.use("/estatico",express.static('public'));
app.use(session({
  secret: "123byuhbsdah12ub",
  resave: false,
  saveUninitialized: false
}));
// app.use(expressLayouts);

// Gets
app.get("/", (req, res) => {
  console.log(req.session.user_id);
  res.render("index1");
});

app.get("/signup", (req, res) => {
  User.find((err, doc) => {
    console.log(doc);
    res.render("signup");
  });
});

app.get("/login", (req, res) => {
  res.render("login1");
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

app.post("/sessions", (req, res) => {
  /*User.findById("56b436b01dcca8b337858602", (err, docs) => {
    console.log("HOLA\n" + docs);
  });*/

  // Query, campos, callback
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }, (err, user) => {
      req.session.user_id = user._id;
      res.send("Hola Mundo");
  });
});

app.use("/app", session_middleware);
app.use('/app', router_app);
app.listen(8080);
