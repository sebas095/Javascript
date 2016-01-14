function route(manejador, pathName, res) {
  console.log('Nueva petición recibida: ' + pathName);
  if (typeof(manejador[pathName]) === 'function')
    manejador[pathName](res);
  else {
    console.log("404, " + pathName + " Not Found");
    res.writeHead(404, {"content-type": "text/html"});
    res.write("404, " + pathName + " Not Found");
    res.end();
  }
}

exports.route = route;
