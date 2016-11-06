function reduce(arr, fn, initial) {
  return (function reduceOne(value, index) {
    if (index >= arr.length) return value;
    return reduceOne(fn(value, arr[index], index, arr), index + 1);
  })(initial, 0);
}
module.exports = reduce;
