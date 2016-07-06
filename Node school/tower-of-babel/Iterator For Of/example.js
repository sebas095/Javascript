// calculating the fibonacci sequence to the 1000st number
  var fibonacci = {
    // Make a method that has the Symbol.iterator function.
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      // The resulting iterator object has to have a next method:
      return {
        next() {
          // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
          [pre, cur] = [cur, pre + cur];
          if (pre < 1000)  return { done: false, value: pre };
          return { done: true };
        }
      }
    }
  }

  // The result's value property will become `n`.
  for (var n of fibonacci) {
    console.log(n);
  }
