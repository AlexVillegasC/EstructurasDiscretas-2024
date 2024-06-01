// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón y el campo de texto por sus IDs
    const inputField = document.getElementById('MiCuadroTxt');
    const button = document.querySelector('button');

    // Añade un evento de clic al botón
    button.addEventListener('click', () => {
        // Obtiene el valor del campo de texto
        const inputValue = inputField.value;

        // Muestra una alerta con el valor ingresado
        alert(`Usted ingresó: ${inputValue}`);
    });
});
