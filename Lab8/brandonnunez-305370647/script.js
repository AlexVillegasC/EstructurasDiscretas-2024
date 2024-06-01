// Obtener referencia al cuadro de texto y al título
var cuadroTxt = document.getElementById('micuadroTxt');
var titulo = document.getElementById('title');

// Agregar un evento de escucha para el evento 'input' en el cuadro de texto
cuadroTxt.addEventListener('input', function() {
    // Actualizar el texto del título con el valor del cuadro de texto
    titulo.textContent = cuadroTxt.value;
})

