// Numero maximo
var max = 100;

// Numero minimo
var min = 1;

// Numero aleatorio
var secretNumber = Math.random() * (max - min) + min; 
// (0......1)
secretNumber = parseInt(secretNumber);

console.log(secretNumber);
var msj = "Ingresa un número para adivinar el número mágico";

while(true){
    var user_number = prompt(msj,"0");
    user_number = parseInt(user_number);
    
    if(user_number === 0)break;
    if(user_number === secretNumber){
        alert("Ganasteee!!! Adivinaste el número secreto");
        break;
    }
    else if(user_number > secretNumber){
        msj = "Lo sentimos, el número que ingresate es mayor que el número mágico";
    }
    else{
        msj = "Lo sentimos, el número que ingresate es menor que el número mágico";
    }
}