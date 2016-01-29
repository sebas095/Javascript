const max = Number(process.argv[2]);
let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        if (i > max) return {done: true};
        if (i % 3 == 0 && i % 5 == 0) return {done: false, value: "FizzBuzz"};
        else if (i % 3 == 0)          return {done: false, value: "Fizz"};
        else if (i % 5 == 0)          return {done: false, value: "Buzz"};
        else                          return {done: false, value: i};
      }
    }
  }
};

for (var n of FizzBuzz) {
  console.log(n);
}
