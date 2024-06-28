// bubble sort de mayor a menor

const calificaciones = [33,62,29,10,76,100,23,96,42,7,7,18,49,99];

// Función para implementar el algoritmo Bubble Sort
function bubbleSort(calificaciones) {
    // Variable para determinar si se realizó un intercambio durante una iteración
    let swapped;
  
    // El bucle externo se ejecutará hasta que no haya más intercambios necesarios
    do {
      // Inicializamos 'swapped' en falso al comienzo de cada iteración
      swapped = false;
  
      // Bucle interno para recorrer el calificaioneseglo desde el principio hasta el penúltimo elemento
      for (let i = 0; i < calificaciones.length ; i++) {
        // Comparamos el elemento actual con el siguiente
        if (calificaciones[i] < calificaciones[i + 1]) {
          // Si están en el orden incorrecto, los intercambiamos y marcamos 'swapped' como verdadero
          [calificaciones[i], calificaciones[i + 1]] = [calificaciones[i + 1], calificaciones[i]];
          swapped = true;
        }
      }
      // Si no se realizaron intercambios durante la iteración, el arreglo ya está ordenado
    } while (swapped);
  
    // Devolvemos el arreglo ordenado
    return calificaciones;
  }
  
  // Ejemplo de uso del algoritmo Bubble Sort

  console.log("calificaiones desordenado:", calificaciones);
  const sortedcalificaiones = bubbleSort(calificaciones);
  console.log("calificaiones ordenado:", sortedcalificaiones);

