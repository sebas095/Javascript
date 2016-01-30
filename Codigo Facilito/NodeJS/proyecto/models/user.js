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
  username: String,
  password: String,
  age: Number,
  email: String,
  date_of_birth: Date
});

// Se crea la tabla user y la coleccion: users
var User = mongoose.model("User", user_schema);

module.exports.User = User;
