// Input
const input = document.getElementById('nuevoTitulo');

// Título
const titulo = document.querySelector('h1');

// Evento Enter
input.addEventListener('keypress', (event) => {
  // Si Enter, obtener texto, trimear y si no vacío:
  if (event.key === 'Enter') {
    const texto = input.value.trim();
    if (texto) {
      titulo.textContent = texto;
      input.value = '';
    }
  }
});

