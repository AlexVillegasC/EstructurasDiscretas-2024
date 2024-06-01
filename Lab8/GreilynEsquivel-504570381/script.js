// Archivo: script.js

// Obtén el elemento de entrada de texto por su ID
var input = document.getElementById('miCuadroTxt');

// Obtén el elemento del botón por su ID
var boton = document.getElementById('Boton');

boton.addEventListener('click', function() {
    // Obtiene el valor del elemento de entrada de texto
    var valor = input.value;

    // Muestra el valor debajo del cuadro de texto
    var resultado = document.createElement('p');
    resultado.textContent = valor;
    document.body.appendChild(resultado);

    // Muestra el valor en la consola del navegador
    console.log(valor);
});
