

// Función bubbleSort para ordenar las calificaciones de mayor a menor

function bubbleSort(notas) {

    const n = notas.length;

    for (let i = 0; i < n - 1; i++) {
      
      for (let j = 0; j < n - i - 1; j++) {
       
        if (notas[j] < notas[j + 1]) {

          const temp = notas[j];
          notas[j] = notas[j + 1];
          notas[j + 1] = temp;
          
        }
      }
    }
  }
  
  const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
  
  bubbleSort(calificaciones);
  
  console.log(calificaciones); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]
  
  console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0, 5)}`);