var _sqrt = (s, x, last) => {
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

const PI = 3.141592;
var sqrt = (s) => _sqrt(s, s / 2.0, 0.0);
var square = (x) => x * x;

export default {
  PI: PI,
  sqrt: sqrt,
  square: square
}
