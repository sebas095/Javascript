'use strict';

class Human {

}

class Tutor extends Human {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  full_name() {
    return this.nombre + " " + this.apellido;
  }
}

var tutor = new Tutor("Sebastian", "Duque");
console.log(tutor.full_name());
