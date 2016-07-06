var arg1 = Number(process.argv[2]);
var arg2 = Number(process.argv[3]);

var obj = {
  [(() => (arg1 & 1)? "odd" : "even")()]: arg1,
  [(() => arg1 + arg2)()]: arg1 + arg2
};

console.log(obj);
