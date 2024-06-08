// 1. O(1) - Complejidad Constante:
//    - Este algoritmo accede directamente al primer elemento de un vector, independientemente de su tamaño, en una sola operación, lo que mantiene su complejidad en O(1).

function obtenerPrimerElemento(vector) {
    return vector[0]; // Accede al primer elemento del vector
}
// Ejemplo de uso
let miVector = [10, 6, 35, 200];
console.log("Primer elemento del arreglo:", obtenerPrimerElemento(miVector)); // Output: 11



// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Este algoritmo divide repetidamente un número por 2 en cada iteración, reduciendo el espacio de búsqueda a la mitad en cada paso, lo que le da una complejidad logarítmica O(Log N).

function encontrarExponenteDeDos(numero) {
    let exponente = 0;
    while (numero > 1) { // Itera mientras el numero sea mayor a 1
        numero = numero / 2; // Divide el número por 2 en cada iteración
        exponente++; // Incrementa el exponente
    }
    return exponente; // Retorna el exponente
}

// Ejemplo de uso
let numero1 = 16;
let exponente1 = encontrarExponenteDeDos(numero1);
let numero2 = 32;
let exponente2 = encontrarExponenteDeDos(numero2);
console.log("Exponente de 2 para", numero1, ":", exponente1);
console.log("Exponente de 2 para", numero2, ":", exponente2);



// 3. **O(N) - Complejidad Lineal:**
//    - Este algoritmo suma todos los elementos de un vector, recorriéndolos una sola vez y manteniendo una complejidad lineal O(N).

function calcularSuma(vector) {
    let suma = 0;
    for (let i = 0; i < vector.length; i++) { // Recorre el vector
        suma += vector[i]; // Suma cada elemento del vector
    }
    return suma; // Retorna la suma
}

// Ejemplo de uso
let array = [1, 2, 3, 4, 5];
console.log("La suma de los elementos del vector es:", calcularSuma(array)); // Output: 15



// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Este algoritmo encuentra el máximo en un array mediante una búsqueda lineal y luego realiza una búsqueda binaria en el subarray restante, combinando procesos lineales y logarítmicos para una complejidad O(N log N).

function encontrarMaximo(array) {
    let maximo = array[0]; // Inicializa el máximo con el primer elemento del array
    for (let i = 1; i < array.length; i++) { // Recorre el array
        if (array[i] > maximo) { // Compara y actualiza el máximo
            maximo = array[i];
        }
    }

    // Búsqueda binaria
    let inicio = 0;
    let fin = array.length - 1;
    while (inicio <= fin) {
        let medio = inicio + ((fin - inicio) / 2 | 0);
        if (array[medio] === maximo) {
            return medio;
        } else if (array[medio] < maximo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
}
// Ejemplo de uso
let numeros = [10, 3, 6, 20, 15, 9];
let indiceDelMaximo = encontrarMaximo(numeros);
console.log("El índice del máximo es:", indiceDelMaximo);



// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Este algoritmo busca pares de elementos duplicados en un array mediante dos bucles anidados, con una complejidad cuadrática O(N^2).

function encontrarDuplicados(array) {
    let duplicados = [];
    for (let i = 0; i < array.length; i++) { // Primer bucle
        for (let j = i + 1; j < array.length; j++) { // Segundo bucle
            if (array[i] === array[j]) {
                duplicados.push([array[i], array[j]]);
            }
        }
    }
    return duplicados;
}
// Ejemplo de uso
let numerosDuplicados = [2, 3, 4, 2, 6, 4, 7, 8, 2];
let paresDuplicados = encontrarDuplicados(numerosDuplicados);
console.log("Pares duplicados:", paresDuplicados);
