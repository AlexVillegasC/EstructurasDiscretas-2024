// Función para contar las frecuencias de las palabras en un texto
function contarPalabras(texto) {
    // Dividir el texto en palabras utilizando espacios como delimitador
    const palabras = texto.split(" ");
  
    // Crear un objeto vacío para almacenar las frecuencias de las palabras
    const frecuencia = {};
  
    // Iterar sobre cada palabra en el array de palabras
    for (const palabra of palabras) {
      // Convertir la palabra a minúsculas y eliminar los signos de puntuación
      const palabraLimpia = palabra.toLowerCase().replace(/[.,!?]/g, "");
  
      // Comprobar si la palabra limpia no está vacía
      if (palabraLimpia) {
        // Incrementar la frecuencia de la palabra en el objeto frecuencia
        frecuencia[palabraLimpia] = (frecuencia[palabraLimpia] || 0) + 1;
      }
    }
  
    // Devolver el objeto frecuencia que contiene las frecuencias de las palabras
    return frecuencia;
  }
  
  // Ejemplo de uso de la función contarPalabras con animales
  const textoEjemplo = "El perro es un animal doméstico. El gato también es un animal doméstico.";
  
  // Llamar a la función contarPalabras con el texto de ejemplo y almacenar el resultado
  const resultado = contarPalabras(textoEjemplo);
  
  // Imprimir el resultado en la consola
  console.table(resultado);
  
  // Output:
  // ┌─────────┬─────────┐
  // │ (index) │ Values  │
  // ├─────────┼─────────┤
  // │ perro   │ 1       │
  // │ es      │ 1       │
  // │ un      │ 2       │
  // │ animal  │ 2       │
  // │ doméstico │ 2     │
  // │ gato    │ 1       │
  // └─────────┴─────────┘