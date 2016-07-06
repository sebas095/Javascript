var promise1 = new Promise((resolve, reject) => {
  resolve('SECRET VALUE');
  reject(new Error('ERROR VALUE'));
});

var promise2 = Promise.resolve('SECRET VALUE');
var promise3 = Promise.reject(new Error('ERROR VALUE'));

promise1
.then(console.log)
.catch((err) => console.log(err.message));

promise2.then(console.log);
promise3.catch((err) => console.log(err.message));
