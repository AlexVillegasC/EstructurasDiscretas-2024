// nuevo_script.js
document.getElementById('update-button').addEventListener('click', function() {
    const newHeader = document.getElementById('header-input').value;
    
    if (newHeader.trim() !== "") {
        document.getElementById('header-title').textContent = newHeader;
    } else {
        alert("Por favor, ingresa un encabezado válido.");
    }
});
