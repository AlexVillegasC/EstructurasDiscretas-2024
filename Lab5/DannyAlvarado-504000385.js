// Definición de una función para imprimir un título con formato
function imprimirTitulo(titulo) {
    console.log('<------------------------------->');
    console.log(titulo);
  }
  
  // 1. O(1) - Complejidad Constante:
  //    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.
  imprimirTitulo("1. O(1) - Complejidad Constante");
  
  // Función que devuelve el primer elemento de un arreglo
  function obtenerPrimerElemento(arr) {
    return arr[0];
  }
  
  // Ejemplo de uso de la función obtenerPrimerElemento
  const tiposDeWeed = ["OG Kush", "Sour Diesel", "Blue Dream", "Girl Scout Cookies", "Granddaddy Purple"];
  console.log("Obtener el primer tipo de weed de [OG Kush, Sour Diesel, Blue Dream, Girl Scout Cookies, Granddaddy Purple]");
  console.log(obtenerPrimerElemento(tiposDeWeed));
  
  
  // 2. O(Log N) - Complejidad Logarítmica:
  //    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.
  imprimirTitulo("2. O(Log N) - Complejidad Logarítmica");
  
  // Implementación de la búsqueda binaria en un arreglo ordenado
  function busquedaBinaria(arr, target) {
    // Ordenamos el arreglo primero
    arr.sort((a, b) => a - b);
    let izquierda = 0;
    let derecha = arr.length - 1;
  
    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);
        if (arr[medio] === target) {
            return medio; // Elemento encontrado
        } else if (arr[medio] < target) {
            izquierda = medio + 1; // Buscamos en la mitad derecha
        } else {
            derecha = medio - 1; // Buscamos en la mitad izquierda
        }
    }
    return -1; // Elemento no encontrado
  }
  
  // Ejemplo de uso de la búsqueda binaria
  const numeros = [5, 3, 8, 6, 1, 9, 4, 7, 2];
  const objetivo = 6;
  console.log(`Array: ${numeros}`);
  console.log(`Elemento buscado: ${objetivo}`);
  let indice = busquedaBinaria(numeros, objetivo);
  if (indice !== -1) {
    console.log(`Elemento ${objetivo} encontrado en el índice ${indice}`);
  } else {
    console.log(`Elemento ${objetivo} no encontrado`);
  }
  
  
  // 3. O(N) - Complejidad Lineal:
  //    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.
  imprimirTitulo("3. O(N) - Complejidad Lineal");
  
  // Función que suma todos los elementos de un arreglo
  function sumaArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
  }
  
  // Ejemplo de uso de la función sumaArray
  const numerosLineales = [10, 15, 3, 7, 8, 23, 5];
  console.log(`Array: ${numerosLineales}`);
  console.log(`La suma es: ${sumaArray(numerosLineales)}`);
  
  
  // 4. O(N Log N) - Complejidad Log-Lineal:
  //    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.
  imprimirTitulo("4. O(N Log N) - Complejidad Log-Lineal");
  
  // Función de ordenamiento Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  // Función auxiliar para combinar dos arreglos ordenados
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Ejemplo de uso de Merge Sort
  let array = [10, 7, 8, 9, 1, 5];
  console.log(`Array original: ${array}`);
  console.log(`Array ordenado: ${mergeSort(array).join(', ')}`);
  
  
  // 5. O(N^2) - Complejidad Cuadrática:
  //    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
  imprimirTitulo("5. O(N^2) - Complejidad Cuadrática");
  
  // Función de ordenamiento Selection Sort
  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
  
  // Ejemplo de uso de Selection Sort
  let arre = [64, 25, 12, 22, 11];
  console.log(`Array original: ${arre}`);
  console.log(`Array ordenado: ${selectionSort(arre)}`);
  
  
  
  // 6. O(2^N) - Complejidad Exponencial:
  //    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.
  imprimirTitulo("6. O(2^N) - Complejidad Exponencial");
  
  // Función para generar todas las combinaciones posibles de un conjunto de elementos
  function generarCombinaciones(elementos) {
    const n = elementos.length;
    const totalCombinaciones = 2 ** n;
  
    for (let i = 0; i < totalCombinaciones; i++) {
        const combinacion = [];
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                combinacion.push(elementos[j]);
            }
        }
        console.log(combinacion);
    }
  }
  
  // Ejemplo de uso de la función generarCombinaciones
  const exponencialEjemplo = [1, 2, 3];
  console.log(`Combinaciones de ${exponencialEjemplo}:`);
  generarCombinaciones(exponencialEjemplo);
  
  
  // 7. O(N!) - Complejidad Factorial:
  //    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
  imprimirTitulo("7. O(N!) - Complejidad Factorial");
  
  // Función para generar todas las permutaciones de una cadena de caracteres
  function permutaciones(cadena) {
    if (cadena.length <= 1) {
        return [cadena];
    }
  
    let permutacionesAnteriores = permutaciones(cadena.slice(1));
    let primeraLetra = cadena[0];
    let resultado = [];
  
    for (let i = 0; i < permutacionesAnteriores.length; i++) {
        let permutacionActual = permutacionesAnteriores[i];
  
        for (let j = 0; j <= permutacionActual.length; j++) {
            let permutacion = permutacionActual.slice(0, j) + primeraLetra + permutacionActual.slice(j);
            resultado.push(permutacion);
        }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso de la función permutaciones
  const cadena = "578";
  console.log(`Permutaciones de ${cadena}: ${permutaciones(cadena).join(', ')}`);
  
