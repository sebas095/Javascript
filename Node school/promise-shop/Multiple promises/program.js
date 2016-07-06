function all(first, second) {
  return new Promise((resolve, reject) => {
    var counter = 0;
    var v = [];

    first.then((value) => {
      v[0] = value;
      counter++;

      if (counter >= 2)
        resolve(v);
    });

    second.then((value) => {
      v[1] = value;
      counter++;

      if (counter >= 2)
        resolve(v);
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
