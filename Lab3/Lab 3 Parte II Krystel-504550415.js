// Bubble Sort

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
console.log("Calificaciones totales desordenadas:", arrayToSort);
const sortedArray = bubbleSort(arrayToSort);
console.log("Calificaciones ordenadas de mayor a menor:", sortedArray);
console.log(`Las cinco calificaciones más altas son: ${arrayToSort.slice(0,5)}`);