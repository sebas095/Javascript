var arr = process.argv.slice(2).map(elem => Number(elem));

// ... Syntax to Spread
console.log(`The minimum of [${arr}] is ${Math.min(...arr)}`);
