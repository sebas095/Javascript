// let -> var
// let es para el alcance de un bloque (if, while, etc ...)
// var es para el alcance de una funcion

'use strict'
init();

function init() {
  var name = "Uriel";
  if (true) {
    let name = "Codifo Facilito";
    console.log(name);
  }
  console.log(name);
}
