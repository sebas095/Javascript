var letters = ["H", "o", "l", "a"];
var sums = [1, 2, 3, 4, 5];
var prefix_sum = [];

// Unir los elemento de un arreglo
// Forma 1
//console.log(letters.join(""));

var word = letters.reduce(function(value_prev_return, current, index, array) {
  //console.log("Prev: " + value_prev_return + ", current: " + current + ", index: " + index);
  return value_prev_return + current;
});

var acc = sums.reduce(function(prev, curr, index, array) {
  prefix_sum.push(prev + curr);
  return prev + curr;
}, 0);

console.log(word);
console.log(acc);
console.log(prefix_sum);
