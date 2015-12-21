var argv = process.argv;
var acc = 0;
if (argv.length > 2) {
  for (var i = 2; i < argv.length; i++)
    acc += Number(argv[i]);
  console.log(acc);
}
