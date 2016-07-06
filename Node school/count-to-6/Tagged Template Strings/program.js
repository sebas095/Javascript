function escape_sequence(string) {
  return string.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/'/g, "&apos;")
               .replace(/"/g, "&quot;");
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html (names, ...values) {
  var j = 0;
  var ans = names[j];
  for (var index in values) {
    ans += escape_sequence(values[index]) + names[++j];
  }
  return ans;
};
