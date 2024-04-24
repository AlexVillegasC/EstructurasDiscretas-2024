// 1. **O(1) - Complejidad Constante:** = Suma de Gauss
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.   

console.log("\n======== Complejidad Constante O(1) ========");
console.log("Suma de Gauss: ");

let n = 100;

number = (n * (n+1)) / 2;
console.log(number);


// ***************************************************************************************
// 2. **O(Log N) - Complejidad Logarítmica:** = 
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   

console.log("\n======== Complejidad Logarítmica O(Log N) ========");
function binarySearch(arr, target) {
    let start = 0; // Establece el índice de inicio del rango de búsqueda
    let end = arr.length - 1; // Establece el índice final del rango de búsqueda
  
    while (start <= end) // Continúa la búsqueda hasta que el índice de inicio sea menor o igual al índice final
    { 
      let mid = Math.floor((start + end) / 2); // Calcula el índice medio del rango de búsqueda
  
      if (arr[mid] === target) // Si el elemento medio es igual al objetivo, devuelve el índice
      { 
        return mid;
      } 
      
      else if (arr[mid] < target) // Si el elemento medio es menor que el objetivo, ajusta el índice de inicio para buscar en la mitad derecha
      { 
        start = mid + 1;
      }
      
      else // Si el elemento medio es mayor que el objetivo, ajusta el índice final para buscar en la mitad izquierda
      { 
        end = mid - 1;
      }

    }
  
    // Si no se encuentra el objetivo, indicamos que no está presente
    return `El elemento ${target} no se encuentra en el arreglo.`;
  }
  
  const arr1 = [1, 3, 5, 7, 9, 11, 13, 15];
  const target = 1;
  const index = binarySearch(arr1, target);
  
  console.log(`El elemento ${target} se encuentra en el índice ${index}`);
  

// ***************************************************************************************
// 3. **O(N) - Complejidad Lineal:** =
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   

console.log("\n======== Complejidad Lineal O(N) ========");
function calcularFactorial(n) {
    let factorial = 1; // Inicializar el factorial en 1
  
    // Bucle desde 2 hasta n 
    for (let i = 2; i <= n; i++) {
      factorial = factorial * i; // Multiplicar el factorial por el número actual
    }
  
    return factorial; // Devolver el factorial calculado
  }
  
  console.log(calcularFactorial(5)); // Debería imprimir 120
  

// ***************************************************************************************
// 4. **O(N Log N) - Complejidad Log-Lineal:** = Heap Sort
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   

console.log("\n======== Complejidad Log-Lineal O(N Log N) ========");
function swap(arr, i, j) {
    const c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
}

function heapify(arr, n, i) {
    let smallest = i; // Inicializamos smallest como la raíz
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // Si el hijo izquierdo es menor o igual que la raíz
    if (l < n && arr[l] <= arr[smallest]) {
        smallest = l;
    }

    // Si el hijo derecho es menor o igual que el más pequeño hasta ahora
    if (r < n && arr[r] <= arr[smallest]) {
        smallest = r;
    }

    // Si el más pequeño no es la raíz
    if (smallest !== i) {
        swap(arr, i, smallest);

        // Recursivamente reorganizamos el subárbol afectado
        heapify(arr, n, smallest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Construimos el montón (reorganizamos el arreglo)
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extraemos uno por uno los elementos del montón
    for (let i = n - 1; i >= 0; i--) {
        // Movemos la raíz actual al final
        swap(arr, 0, i);

        // Llamamos a heapify en el montón reducido
        heapify(arr, i, 0);
    }
}

const arr = [4, 6, 3, 2, 9];
console.log("Arreglo desordenado:", arr);

heapSort(arr);
console.log("Arreglo ordenado:", arr);


// ***************************************************************************************
// 5. **O(N^2) - Complejidad Cuadrática:** = (Gnome Sort en el peor/normal de los casos) (Bubble Sort)(Coktail Sort)(Selection Sort)
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

console.log("\n======== Complejidad Cuadrática O(N^2) ========");
function selectionSort(arr) {
    // Bucle exterior: recorre el arreglo desde el principio hasta el penúltimo elemento
    for (let i = 0; i < arr.length - 1; i++) {
      // Inicialización de la variable minIndex para almacenar el índice del elemento mínimo
      let minIndex = i;
      // Bucle interior: busca el índice del elemento mínimo en el subarreglo no ordenado
      for (let j = i + 1; j < arr.length; j++) {
        // Si el elemento actual (arr[j]) es menor que el mínimo actual (arr[minIndex]),
        // actualizamos minIndex con el nuevo índice
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Si minIndex no es igual a i, intercambiamos los valores de los elementos en las posiciones i y minIndex
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    // Devolvemos el arreglo ordenado
    return arr;
  }
  
  const array = [5, 2, 8, 4, 1];
  const sortedArray = selectionSort(array);
  console.log(sortedArray); // Salida esperada: [1, 2, 4, 5, 8]
  

// ***************************************************************************************
// 6. **O(2^N) - Complejidad Exponencial:** = 
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   

console.log("\n======== Complejidad Exponencial O(2^N) ========");
function Fibonaccirecursivo(n) {
    // Condición base: si n es menor que 2, devuelve n
    if (n < 2) {
      return n;
    }
    // Llamada recursiva: devuelve la suma de los dos números de Fibonacci anteriores
    return Fibonaccirecursivo(n - 1) + Fibonaccirecursivo(n - 2);
  }
  // Imprime el resultado de la función Fibonaccirecursivo con el argumento 6
  console.log(Fibonaccirecursivo(6)); //8


// ***************************************************************************************
// 7. **O(N!) - Complejidad Factorial:** = 
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

console.log("\n======== Complejidad Factorial O(N!) ========");
// Esta función calcula el costo total de una asignación específica basada en la matriz de costos.
function calcularCosto(asignacion, costos) {
    let costoTotal = 0;
    // Itera sobre cada elemento de la asignación para sumar los costos.
    for (let i = 0; i < asignacion.length; i++) {
      costoTotal += costos[i][asignacion[i]];
    }
    return costoTotal; // Retorna el costo total calculado.
  }
  
  // Esta función encuentra la asignación con el costo mínimo entre todas las permutaciones posibles.
  function encontrarMejorAsignacion(permutaciones, costos) {
    let costoMinimo = Infinity; // Inicializa el costo mínimo con un valor infinito.
    let mejorAsignacion = []; // Inicializa la mejor asignación como un arreglo vacío.
  
    // Itera sobre cada permutación para encontrar la de costo mínimo.
    permutaciones.forEach(asignacion => {
      let costoActual = calcularCosto(asignacion, costos); // Calcula el costo de la asignación actual.
      if (costoActual < costoMinimo) { // Si el costo actual es menor que el costo mínimo encontrado hasta ahora...
        costoMinimo = costoActual; // ...actualiza el costo mínimo...
        mejorAsignacion = asignacion; // ...y actualiza la mejor asignación.
      }
    });
  
    return { mejorAsignacion, costoMinimo }; // Retorna la mejor asignación y el costo mínimo.
  }
  
  // Esta función genera todas las permutaciones posibles de un arreglo.
  function generarPermutaciones(array) {
    // Función interna recursiva para generar permutaciones.
    function permute(arr, m = []) {
      if (arr.length === 0) { // Si el arreglo está vacío, agrega la permutación al resultado.
        permutaciones.push(m);
      } else {
        // De lo contrario, para cada elemento del arreglo...
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice(); // ...hace una copia del arreglo...
          let next = curr.splice(i, 1); // ...extrae el elemento en la posición i...
          permute(curr.slice(), m.concat(next)); // ...y llama a la función permute con el resto del arreglo y la permutación actual.
       }
     }
   }
  
   let permutaciones = []; // Inicializa el arreglo de permutaciones.
   permute(array); // Llama a la función permute con el arreglo original.
   return permutaciones; // Retorna todas las permutaciones generadas.
  }
  
  // Supongamos que tenemos 3 trabajadores y una matriz de costos para cada tarea.
  let trabajadores = [0, 1, 2];
  let costos = [
    [9, 2, 7],
    [6, 4, 3],
    [5, 8, 1]
  ];
  
  // Genera todas las permutaciones posibles de los trabajadores.
  let todasLasAsignaciones = generarPermutaciones(trabajadores);
  // Encuentra la mejor asignación con el costo mínimo.
  let resultado = encontrarMejorAsignacion(todasLasAsignaciones, costos);
  // Imprime la mejor asignación y el costo mínimo en la consola.
  console.log('La mejor asignación es:', resultado.mejorAsignacion);
  console.log('Con un costo mínimo de:', resultado.costoMinimo);
  

