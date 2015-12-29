// new Array(size); o new Array(element1, element2, ...)
// [20, "hola mundo", {}, []];
var arreglo = [20, 10, 5];

arreglo.push(7);   // Pone el elemento al final
arreglo.pop();     // Borra el ultimo elemento

arreglo.unshift(7); // Pone el elemento al principio
arreglo.shift();   // Borra el primer elemento

console.log(arreglo.length);
for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
