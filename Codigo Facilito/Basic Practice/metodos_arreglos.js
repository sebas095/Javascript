function ordenar(a, b) {
  return a - b;
}

var arreglo = [2, 5, 10, 1, 20];
var s = "a,b,c,2".split(","); // convierte de string a array
s = s.join(".") // convierte de array a string separado por lo que este de parametro

arreglo.sort(ordenar);
arreglo.reverse();

console.log(arreglo);
console.log(s);
