const arraymap = (arr, fn, thisArg) => {
  return arr.reduce((prev, item, index, arr) => {
    prev.push(fn.call(thisArg, item, index, arr));
    return prev;
  }, []);
};
module.exports = arraymap;
