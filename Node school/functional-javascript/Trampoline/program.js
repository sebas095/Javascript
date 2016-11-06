const repeat = (operation, num) => {
  return () => {
    if (num <= 0) return;
    operation();
    return repeat(operation, num - 1);
  }
};

const trampoline = fn => {
  while (fn && typeof fn === 'function')
    fn = fn();
};

module.exports = (operation, num) => {
  trampoline(() => repeat(operation, num));
};
