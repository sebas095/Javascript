var arg1 = Number(process.argv[2]);
var arg2 = Number(process.argv[3]);

import {PI, sqrt, square} from "./Math";
console.log(`${PI}\n${sqrt(arg1)}\n${square(arg2)}`);
