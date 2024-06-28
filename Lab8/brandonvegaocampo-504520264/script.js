
document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('miCuadrotxt');

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const inputValue = inputField.value;
            console.log('Texto guardado:', inputValue);
        }
    });
});