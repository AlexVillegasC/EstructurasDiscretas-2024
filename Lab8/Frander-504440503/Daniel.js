function saludar() {
    // Obtener el nombre ingresado por el usuario
    var nombre = document.getElementById("nombre").value;
    
    // Mostrar un mensaje de bienvenida con el nombre ingresado
    alert("¡Hola, " + nombre + "! Bienvenid@ a UNALAND.");
  }

  function mostrarMensaje() {
    // Obtener el texto ingresado por el usuario
    var texto = document.getElementById("entrada").value;
    
    // Mostrar el texto en el div de mensaje
    var mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
}
