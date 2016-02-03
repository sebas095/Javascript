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

var posibles_valores = ["M", "F"];
var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Coloca un email válido"];
var password_validation = {
  validator: (pwd) => {
    return this.password_confirmation == pwd;
  },
  message: "Las contraseñas no son iguales"
}

var user_schema = new Schema({
  name: String,
  last_name: String,
  username: {
    type: String,
    required: true,
    maxlength: [50, "Username muy grande"]
  },
  password: {
    type: String,
    minlength: [8, "El password es muy corto"],
    validate: password_validation
  },
  age: {
    type: Number,
    min: [5, "La edad no puede ser menor que 5"],
    max: [100, "la edad no puede ser mayor que 100"]
  },
  email: {
    type: String,
    required: "El correo es obligatorio",
    match: email_match
  },
  date_of_birth: Date,
  sex: {
    type: String,
    enum: {
      values: posibles_valores,
      message: "Opción no válida"
    }
  }
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
