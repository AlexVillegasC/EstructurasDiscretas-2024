function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const mensaje = document.getElementById("mensaje").value;
        if (mensaje.trim() !== "") { // Verificar si el mensaje no está vacío
            alert("Gracias por tu mensaje:\n\n" + mensaje);
            document.getElementById("mensaje").value = ""; // Limpiar el textarea
        }
    }
}

// Función para mostrar/ocultar secciones al hacer clic en los enlaces del menú (opcional)
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Función para obtener un dato random
async function getRandomFact() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        document.getElementById('random-fact-display').textContent = data.text;
    } catch (error) {
        document.getElementById('random-fact-display').textContent = 'Error al obtener el dato random.';
    }
}

document.getElementById('random-fact-button').addEventListener('click', getRandomFact);
