function render(html, parametros) {
  var variables = html.match(/[^\{\}]+(?=\})/g);
  for (var i = 0; i < variables.length; i++) {
    // [nombre, apellido]
    var variable = variables[i];
    html = html.replace("{" + variable + "}", parametros[variable]);
  }
  return html;
}

module.exports.render = render;
