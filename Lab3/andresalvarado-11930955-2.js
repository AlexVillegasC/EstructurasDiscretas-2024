// Bubble Sort

// Función para implementar el algoritmo Bubble Sort
function bubbleSort(Array) 
{
    // Variable para determinar si se realizó un intercambio durante una iteración
    let Intercambio;
  
    // El bucle externo se ejecutará hasta que no haya más intercambios necesarios
    do 
    {
      // Inicializamos 'Intercambio' en falso al comienzo de cada iteración
      Intercambio = false;
  
      // Bucle interno para recorrer el arreglo desde el principio hasta el penúltimo elemento
      for (let i = 0; i < Array.length + 1; i++) 
      {
        // Comparamos el elemento actual con el siguiente
        if (Array[i] < Array[i + 1]) 
        {
          // Si están en el orden incorrecto, los intercambiamos y marcamos 'Intercambio' como verdadero
          [Array[i], Array[i + 1]] = [Array[i + 1], Array[i]];
          Intercambio = true;
        }
      }
      // Si no se realizaron intercambios durante la iteración, el arreglo ya está ordenado
    } while (Intercambio);
  
    // Devolvemos el arreglo ordenado
    return Array;
  }
  
  // Ejemplo de uso del algoritmo Bubble Sort
  const arrayToSort = [64, 34, 25, 17, 22, 11, 90, 3, 102, 136, 150];
  console.log("Arreglo desordenado:", arrayToSort);
  const sortedArray = bubbleSort(arrayToSort);
  console.log("Arreglo ordenado:", sortedArray);