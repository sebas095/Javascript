const logger = namespace => (...arg) => console.log.apply(console, [namespace].concat(arg));
module.exports = logger;
