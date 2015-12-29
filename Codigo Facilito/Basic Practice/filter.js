var number = [10, 2, 3, 5, 9, 20, 22, 8];
var filter1 = [];
var filter2 = [];

// sin filter
filter1 = (function() {
  aux = [];
  for (var i = 0; i < number.length; i++)
    if (!(number[i] & 1))
      aux.push(number[i]);
  return aux;
})();

// con filter
filter2 = number.filter(function(element, index) {
  return !(element & 1) && (index & 1);
});

console.log(filter1);
console.log(filter2);
