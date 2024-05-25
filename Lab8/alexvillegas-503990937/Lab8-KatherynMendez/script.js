function darBienvenida() {
    var nombre = document.getElementById("nombre").value;
    if (nombre !== "") {
        alert("Bienvenido/a, " + nombre + "!");
    } else {
        alert("Por favor, ingrese su nombre.");
    }
}

function mostrarEnConsola() {
    console.log("Se hizo clic en el botón.");
}