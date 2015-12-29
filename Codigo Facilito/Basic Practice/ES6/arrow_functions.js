var numbers = [1, 2, 3, 4, 5];

// Forma 1
var square1 = numbers.map(function(elem) {
  return elem *= elem;
});
print(square1);

// Forma 2 con notacion arrow
var numbers = [1, 2, 3, 4, 5];
var square2 = numbers.map(elem => elem * elem);
console.log(square2);

function Tutor(){
  this.nombre = "Uriel";
  // Antes: var self = this;
  setTimeout(() => {
    // antes: self.nombre = "Codigo Facilito";
    // con el => perimite heredar el scope del padre
    this.nombre = "Codigo Facilito";
  }, 500);
}

var tutor = new Tutor();
console.log(tutor.nombre);

setTimeout(function() {
  console.log(tutor.nombre);
}, 1000);
