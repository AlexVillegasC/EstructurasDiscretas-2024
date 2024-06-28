console.log("-------------------------Laboratorio #5-----------------------------");
console.log("--------------------------------------------------------------------");
// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada. 

//Este algoritmo siempre imprime "El Mensaje" sin importar el tamaño de la entrada.
function imprimirTexto() {
    console.log("Algoritmo Constante");
}
imprimirTexto();  // Siempre ejecuta una cantidad fija de pasos.

console.log("--------------------------------------------------------------------");
// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   

// Función para encontrar el máximo común divisor (MCD) de dos números utilizando el algoritmo de Euclides
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Ejemplo de uso
const num1 = 48;
const num2 = 18;
const mcd = gcd(num1, num2);
console.log(`El máximo común divisor de ${num1} y ${num2} es ${mcd}.`);

console.log("--------------------------------------------------------------------");
// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.  
function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

// Ejemplo de uso
const miArray = [133, 22, 35, 4, 50];
const resultado = sumarElementos(miArray);
console.log("La suma de los elementos es:", resultado);

console.log("--------------------------------------------------------------------");
// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico. 
// Complejidad O(N Log N)

// Algoritmo de ordenamiento Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

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

// Ejemplo de uso:
const arr = [5, 3, 8, 1, 4, 9, 2, 7, 6];
console.log("Array ordenado:");
console.log(mergeSort(arr)); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("--------------------------------------------------------------------");
// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
function sumaParesCuadratico(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            suma += arr[i] + arr[j];
        }
    }
    return suma;
}

// Ejemplo de uso:
const arreglo = [1, 2, 3, 4, 5];
console.log(sumaParesCuadratico(arreglo)); // Salida: 90 (1+1 + 1+2 + 1+3 + 1+4 + 1+5 + 2+1 + 2+2 + 2+3 + 2+4 + 2+5 + 3+1 + 3+2 + 3+3 + 3+4 + 3+5 + 4+1 + 4+2 + 4+3 + 4+4 + 4+5 + 5+1 + 5+2 + 5+3 + 5+4 + 5+5)

console.log("--------------------------------------------------------------------");
// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada. 
// Complejidad O(2^N)

// Algoritmo recursivo exponencial
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso:
console.log(fibonacci(6)); // Resultado: 8 (0, 1, 1, 2, 3, 5, 8)

console.log("--------------------------------------------------------------------");
// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
// Complejidad O(N!)

// Algoritmo recursivo factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Ejemplo de uso:
console.log(factorial(5)); // Resultado: 120 (5 * 4 * 3 * 2 * 1)

console.log("--------------------------------------------------------------------");