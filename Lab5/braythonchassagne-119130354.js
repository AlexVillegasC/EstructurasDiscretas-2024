// 1. O(1) - Complejidad Constante:
function constantAlgorithm() {
    let fixedResult = 5 + 10; // Operaciones fijas
    console.log(fixedResult); // Siempre imprimirá el mismo resultado
}

// Ejemplo de uso:
constantAlgorithm(); // Siempre ejecutará una cantidad fija de pasos

// 2. O(Log N) - Complejidad Logarítmica:

function logarithmicAlgorithm(n) {
    let result = 1;
    while (n > 1) {
        result *= 2;
        n /= 2;
    }
    return result;
}

// Ejemplo de uso:
console.log(logarithmicAlgorithm(8)); // Debería imprimir 8, ya que 2^3 = 8

// 3. O(N) - Complejidad Lineal:
function linearAlgorithm(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]); // Recorrer cada elemento una sola vez
    }
}

// Ejemplo de uso:
let inputArray = [1, 2, 3, 4, 5];
linearAlgorithm(inputArray); // Recorrerá cada elemento una sola vez

// 4. O(N Log N) - Complejidad Log-Lineal:
function linearLogarithmicAlgorithm(array) {
    array.sort(); // Proceso logarítmico
    array.forEach(element => {
        console.log(element); // Proceso lineal
    });
}

// Ejemplo de uso:
let inputArray = [4, 2, 7, 1, 5];
linearLogarithmicAlgorithm(inputArray);


// 5. O(N^2) - Complejidad Cuadrática:
function quadraticAlgorithm(array) {
    for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
        for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
            console.log(array[outerIndex], array[innerIndex]); // Ejecución cuadrática
        }
    }
}

// Ejemplo de uso:
let Array = [1, 2, 3, 4, 5];
quadraticAlgorithm(inputArray); // El tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada

// 6. O(2^N) - Complejidad Exponencial:
function powerOfTwo(n) {
    return Math.pow(2, n);
}

// Ejemplo de uso:
let powerResult = powerOfTwo(5); // Devolverá 32
console.log("2 elevado a la 5:", powerResult);

// 7. O(N!) - Complejidad Factorial:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Ejemplo de uso:
let factorialResult = factorial(5); // Devolverá 120
console.log("Factorial de 5:", factorialResult);
