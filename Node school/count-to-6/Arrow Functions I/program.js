var input = process.argv.slice(2);
var ans = input.map(element => element[0])
               .reduce((prev, curr) => prev += curr);

console.log(`[${input}] becomes "${ans}"`);
