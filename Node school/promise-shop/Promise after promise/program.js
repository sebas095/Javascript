var firstPromise = first();
var secondPromise = firstPromise.then((msj) => second(msj));

secondPromise.then(console.log);
// first()
//  .then(second)
//  .then(console.log);
