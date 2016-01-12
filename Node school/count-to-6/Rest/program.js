// rest parameters: function foo(...args) {}
module.exports = function average(...args) {
  var ans = 0;
  args.forEach(elem => ans += elem);
  return ans / args.length;
}
