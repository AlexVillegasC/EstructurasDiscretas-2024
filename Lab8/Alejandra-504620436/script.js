// script.js

function redirigir() {
    // Obtener el nombre del input
    var nombre = document.getElementById("nombre").value;
    
    // Almacenar el nombre en localStorage
    localStorage.setItem("nombreUsuario", nombre);
    
    // Redirigir a la página de bienvenida
    window.location.href = "bienvenido.html";
}
