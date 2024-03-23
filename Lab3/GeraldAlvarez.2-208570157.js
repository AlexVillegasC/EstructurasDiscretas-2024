// metodo 1
function sortGrades(calificaciones) {
    let n = calificaciones.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (calificaciones[j] < calificaciones[j+1]) {
          let temp = calificaciones[j];
          calificaciones[j] = calificaciones[j+1];
          calificaciones[j+1] = temp;
        }
      }
    }
  }
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
  sortGrades(calificaciones);
  console.log('Notas:',calificaciones); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]
  console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`); 
  
  // segundo metodo
  // Función para implementar el algoritmo Bubble Sort
function bubbleSort(arr) {
    // Variable para determinar si se realizó un intercambio durante una iteración
    let swapped;
  
    // El bucle externo se ejecutará hasta que no haya más intercambios necesarios
    do {
      // Inicializamos 'swapped' en falso al comienzo de cada iteración
      swapped = false;
  
      // Bucle interno para recorrer el arreglo desde el principio hasta el penúltimo elemento
      for (let i = 0; i < arr.length - 1; i++) {
        // Comparamos el elemento actual con el siguiente
        if (arr[i] < arr[i + 1]) {
          // Si están en el orden incorrecto, los intercambiamos y marcamos 'swapped' como verdadero
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      // Si no se realizaron intercambios durante la iteración, el arreglo ya está ordenado
    } while (swapped);
  
    // Devolvemos el arreglo ordenado
    return arr;
  }
  
  // Ejemplo de uso del algoritmo Bubble Sort
  const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
  console.log("Notas desordenadas:", arrayToSort);
  const sortedArray = bubbleSort(arrayToSort);
  console.log("Notas ordenadas:", sortedArray);