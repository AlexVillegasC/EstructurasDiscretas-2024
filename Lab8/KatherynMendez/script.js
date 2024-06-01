function darBienvenida() {
    var nombre = document.getElementById("nombre").value;
    if (nombre !== "") {
        alert("Bienvenido/a, " + nombre + "!");
    } else {
        alert("Por favor, ingrese su nombre.");
    }
}

function mostrarEnConsola() {
    var textoIngresado = document.getElementById("nombre").value;
    console.log("Texto ingresado en la caja de texto: " + textoIngresado);
}