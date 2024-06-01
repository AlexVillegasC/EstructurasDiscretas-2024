// display.js

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el nombre almacenado en localStorage
    var nombre = localStorage.getItem("nombreUsuario");
    
    // Mostrar el nombre en el elemento con id "mensaje"
    if (nombre) {
        document.getElementById("mensaje").textContent = "Hola, " + nombre + "!";
    } else {
        document.getElementById("mensaje").textContent = "No se ingresó ningún nombre.";
    }
});
