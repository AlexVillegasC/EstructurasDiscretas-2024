document.addEventListener('DOMContentLoaded', (event) => 
    {
    const inputElement = document.getElementById('Mensaje');
    const titleElement = document.getElementById('titulo');

    inputElement.addEventListener('input', () => 
    {
        const inputValue = inputElement.value;
        titleElement.textContent = `Has ingresado: ${inputValue}`;
    });
});