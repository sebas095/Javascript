const Spy = (target, method) => {
  const func = target[method];
  let obj = {
    count: 0
  };

  target[method] = (...arg) => {
    obj.count++;
    return func.apply(target[method], arg);
  }

  return obj;
};
module.exports = Spy;
