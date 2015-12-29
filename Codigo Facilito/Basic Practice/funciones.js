function suma(a, b) {
  // Codigo que se va a ejecutar al llamar la función
  b = b || 0;
  return a + b;
}

function ejecutar(funcion) {
  return funcion;
}

 var funcion_suma = suma;
 var resultado = ejecutar(funcion_suma(2, 3));

console.log(resultado);
