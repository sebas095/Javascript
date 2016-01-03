function parse(req) {
  var arreglo_parametros = [], parametros = {};
  if (req.url.indexOf("?") > 0) {
    // ?nombre=sebas&data=algo => ['/', 'nombre=sebas&data=algo']
    var url_data = req.url.split("?");
    arreglo_parametros = url_data[1].split("&");
    // [nombre=sebas, data=algo]
  }

  for (var i = 0; i < arreglo_parametros.length; i++) {
    var parametro = arreglo_parametros[i];
    // nombre=sebas
    var param_data = parametro.split("=");
    // [nombre, sebas];
    parametros[param_data[0]] = param_data[1];
    // {nombre: sebas}
  }
  return parametros;
}

module.exports.parse = parse;
