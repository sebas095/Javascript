/*
 Tipos de datos en MongoDB:
 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 Objectid
 Array
*/

// Colecciones => tablas
// Documentos => filas

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var user_schema = new Schema({
  name: String,
  last_name: String,
  username: String,
  password: String,
  age: Number,
  email: String,
  date_of_birth: Date
});

// Atributos virtuales (sirven solo para el objeto y no se guarda en la BD)
user_schema.virtual("password_confirmation").get(() => this.password_confirmation)
                                            .set((password) => this.password_confirmation = password);
/*
user_schema.virtual("full_name").get(() => this.name + this.last_name)
                                .set((full_name) => {
                                  var words = full_name.split(" ");
                                  this.name = words[0];
                                  this.last_name = words[1];
                                });*/

// Se crea la tabla user y la coleccion: users
var User = mongoose.model("User", user_schema);

module.exports.User = User;
