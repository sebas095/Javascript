/*
Keywords
undefined
null
*/

var msj = "Hola";
var num = 14;
var arr = [];
var obj = {};

console.log(typeof(msj));
console.log(typeof(num));
console.log(typeof(arr));
console.log(typeof(obj));

var hola = null;
if(typeof(hola) == 'undefined'){
    console.log("Esta variable no  esta definida");
}

//undefined la variable no existe o no ha sido inicializada
//null para asignar valor por defecto

(null == undefined)? console.log("Son iguales") : console.log("Son diferentes");
(null === undefined)? console.log("Son equivalentes") : console.log("No son equivalentes");
