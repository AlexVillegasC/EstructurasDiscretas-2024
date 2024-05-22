// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.   
function constantAlgorithm() {
    // Este algoritmo siempre ejecuta una cantidad fija de pasos
    // independientemente del tamaño de la entrada.
    console.log("Este algoritmo tiene complejidad constante.");
}
// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   
function logarithmicAlgorithm(n) {
    let count = 0;
    while (n > 1) {
        n = Math.floor(n / 2);
        count++;
    }
    return count;
}
// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   
function linearAlgorithm(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   
function logLinearAlgorithm(arr) {
    arr.sort(); // Algoritmo de ordenamiento que suele tener complejidad O(N Log N)
    return arr;
}

// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
function quadraticAlgorithm(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum++;
        }
    }
    return sum;
}

// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   
function exponentialAlgorithm(n) {
    if (n <= 1) {
        return 1;
    }
    return exponentialAlgorithm(n - 1) + exponentialAlgorithm(n - 2);
}

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
//Todos en el peor de los casos: 0(n^2)
//Todos en el mejor de los casos: 0nlogn
function factorialAlgorithm(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialAlgorithm(n - 1);
}
