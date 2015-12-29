// Bubbbling: Es desde el boton(adentro) hacia afuera (false)
// Capture: Es desde afuera hacia adentro (true)

document.getElementById('mi_div')
.addEventListener("click", another_click, true);

document.getElementById('mi_btn')
.addEventListener("click", click, false);

function click() {
	alert("Esto fue disparado por el boton");
}

function another_click() {
	alert("Esto fue disparado por el div");
}