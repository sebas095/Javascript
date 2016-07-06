import Mathe from './Math';

var arg1 = Number(process.argv[2]);
var arg2 = Number(process.argv[3]);
var PI = Mathe.PI;
var sqrt = Mathe.sqrt;
var square = Mathe.square;

console.log(`${PI}\n${sqrt(arg1)}\n${square(arg2)}`);
