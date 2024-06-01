// Obtén el elemento de entrada de texto por su ID
var input = document.getElementById('miCuadroTxt');

// Obtén el elemento del botón por su ID
var boton = document.getElementById('miBoton');

boton.addEventListener('click', function() {
     var valor = input.value;
      
        // Muestra el valor en el título de la página
        document.getElementById("titulo").textContent = valor;
  // Muestra el valor en la consola del navegador
  console.log(valor);
});
