
// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.  
function imprimirPrimerElemento(array) {
    // Accedemos al primer elemento del array, no importa su tamaño de su tamaño
    if (array.length > 0) {
        console.log(array[0]);
    } else {
        console.log("El array esta vacio.");
    }
}
var miArray = [1, 4, 3, 5, 2];
imprimirPrimerElemento(miArray); // No importa su tamaño siempre se accede al primero


// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso. 

function potencia(base, exponente) {
    //si el exponente es 0, retornamos 1
    if (exponente === 0) {
        return 1;
    } else {
        // Si el exponente es par, calculamos la potencia de la mitad
        if (exponente % 2 === 0) {
            const mitad = potencia(base, exponente / 2);
            return mitad * mitad;
        } else {
            // Si el exponente es impar, calculamos la potencia de la mitad y multiplicamos por la base
            const mitad = potencia(base, (exponente - 1) / 2);
            return mitad * mitad * base;
        }
    }
}
console.log("Resultado de 2 a la 5:", potencia(2, 5)); // Output: 32
console.log("Resultado de 3 a la 4:",potencia(3, 4)); // Output: 81   //se divide el problema en subproblemas de tamaño aproximadamente mitad en cada llamada. 
//La complejidad de esta función es O(log N), donde N es el exponente.



// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez. 
function sumaArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const myArray = [1, 2, 3, 4, 5];
const result = sumaArray(myArray);
console.log("La suma de los elementos es:", result);
//solo recorre el arreglo una vez sumandolos todos, donde N es el numero de elementos en el array



// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.  
// Implementación de QuickSort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];// Un pivote es el elemento en la mitad del array
    const left = []; // Array para elementos menores que el pivote
    const right = []; // Array para elementos mayores que el pivote

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
const array = [5, 3, 7, 2, 8, 4, 9, 1, 6];
console.log("Array original quickS:", array);
const sortedArray = quickSort(array);
console.log("Array ordenado quickS:", sortedArray);


// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
// Función que implementa el algoritmo de ordenamiento de burbuja
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Iterar sobre los elementos restantes del arreglo
        // n - i - 1 porque los elementos más grandes ya están en su posición correcta después de las iteraciones anteriores
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, intercambiamos
            if (arr[j] > arr[j + 1]) {
                // Intercambiar arr[j] y arr[j+1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const arreglo = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original bubble:", arreglo);
console.log("Array ordenado bubble:", bubbleSort(arreglo));


// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  // Calcular el término n de la serie de Fibonacci que puede ser infinita xd
  const n = 10;
  console.log(`El termino ${n} de la serie de Fibonacci es:`, fibonacci(n));
  


  // 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(`El factorial de 5 es:`, factorial(5)); // Output: 120
  //Depende del numero se vuelve muy complejo :( podria tomar mil vidas jajajsj

  //fin del lab 5. pd: hasta ahora que me puse a investigar bien para hacer este lab entendí profe :´)