var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var error = new Error('REJECTED!');
    reject(error);
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(null, onReject);
