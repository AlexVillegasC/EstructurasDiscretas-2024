// Función para ordenar un arreglo usando el algoritmo Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    // Iterar sobre todo el arreglo
    for (let i = 0; i < n - 1; i++) {
      // Iterar sobre el arreglo restante
      for (let j = 0; j < n - i - 1; j++) {
        // Si el elemento actual es menor que el siguiente, intercambiarlos
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  // Función para clasificar de mayor a menor
  function sortGrades(grades) {
    bubbleSort(grades); // usa el bubbleSort para ordenar las calificaciones
  }
  
  // Arreglo de calificaciones de ejemplo
  const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
  sortGrades(calificaciones); // Llamar a sortGrades para ordenar las calificaciones
  console.log(`Las calificaciones ordenadas de mayor a menor son: ${calificaciones}`); 
  console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`);
  