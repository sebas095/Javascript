var numbers = [2, 4, 6, 8];

numbers.forEach(function(elemento, index, arreglo) {
  arreglo[index] *= arreglo[index];
});

console.log(numbers);
