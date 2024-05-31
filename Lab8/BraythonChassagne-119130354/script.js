function cambiarTitulo() {
    // Obtener el nuevo texto desde el cuadro de texto
    var nuevoTitulo = document.getElementById('mi-cuadrodetexto').value;
    
    // Cambiar el texto del elemento <h1> con el nuevo título
    document.getElementById('titulo').innerText = nuevoTitulo;
}
