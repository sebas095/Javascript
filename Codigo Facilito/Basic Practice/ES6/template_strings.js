var nombre = "Codigo Facilito";
// Concatencion con template string
var saludo = `Hola ${nombre} buen dia`;
console.log(saludo);

// Interpolacion
function add(a, b) {
  return a + b;
}
var sal = `Hola ${add(1, 2)} buen dia.`;
var sal2 = `Hola ${"Código" + "facilito"} buen dia.`;
console.log(sal);

// Tagged template
function tagged(cadenas, valores) {
  console.log(cadenas);
  console.log(valores);
}
tagged`Hola ${"Código" + "facilito"} buen dia ${nombre}.`;

// Cadena multilinea
// Ahora
var template = `Hola
  puts :p
mundo`;

// Antes
var multilinea = "algo \
otra cosa";

//console.log(template);
