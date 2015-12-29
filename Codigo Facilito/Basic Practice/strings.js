var nombre = 'Sebastian';
var string = 'Hola ' + nombre;

var resultado1 = string.indexOf("Sebastian"); // Retorna el indice donde incia la cadenaencontrada
var resultado2 = string.indexOf("CodigoFacilito"); // Retorna -1 si no fue encontrado

console.log(string.length);
console.log(resultado1);
console.log(resultado2);

if(nombre.indexOf("Sebastian") != -1){
    console.log("Eres alumno del curso");
}
else{
    console.log("No eres alumno de este curso");
}

console.log("First character of the string: " + string.charAt(0));
console.log("Last character of the string: " + string[string.length-1]);
console.log(string.charCodeAt(3)); // Valor unicode de string[3]

nombre = nombre.replace("S","F");
console.log(nombre);    

// Rodaja del string [l,r)
console.log(string.slice(5,10));
console.log(string.toUpperCase());
console.log(string.toLowerCase());