var numbers = [1, 5, 6, 8];
//numbers.map(callback);

// Sin map
var sqr1 = (function() {
  var ans = [];
  for (var i = 0; i < numbers.length; i++)
    ans.push(Math.pow(numbers[i], 2));
  return ans;
})();

// Con map
var sqr2 = numbers.map(function(element) {
  return element * element;
});

console.log("Sin Map: " + sqr1);
console.log("Con Map: " + sqr2);
