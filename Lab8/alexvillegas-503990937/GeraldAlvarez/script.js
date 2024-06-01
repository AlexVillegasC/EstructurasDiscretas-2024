// java.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el input y crea un evento cuando el usuario presiona la tecla Enter
    const input = document.getElementById('Mensaje');

    input.addEventListener('keypress', function(event) {
        // Comprueba si la tecla presionada es Enter
        if (event.key === 'Enter') {
            // Obtén el valor del input
            const valor = input.value;
            // Muestra una alerta con el valor ingresado
            alert('El valor ingresado es: ' + valor);
        }
    });
});
