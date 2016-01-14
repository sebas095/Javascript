function funcion_1(res) {
  console.log("Funcion 1 ejecutada.");
  res.writeHead(200, {"content-type": "text/html"});
  res.write("Funcion 1 ejecutada.");
  res.end();
}

function funcion_2(res) {
  console.log("Funcion 2 ejecutada.");
  res.writeHead(200, {"content-type": "text/html"});
  res.write("Funcion 2 ejecutada.");
  res.end();
}

exports.funcion_1 = funcion_1;
exports.funcion_2 = funcion_2;
