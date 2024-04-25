// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.   

function algoritmoConstante()
{
    const valorConstante = 8;
    return valorConstante;
}
console.log(algoritmoConstante());

// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   

function busquedaBinaria(arr, elemento) 
{
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        // Si encontramos el elemento en el medio
        if (arr[medio] === elemento) {
            return medio;
        }
        // Si el elemento está en la mitad derecha del arreglo
        else if (arr[medio] < elemento) {
            inicio = medio + 1;
        }
        // Si el elemento está en la mitad izquierda del arreglo
        else {
            fin = medio - 1;
        }
    }

    // Si no se encuentra el elemento
    return -1;
}

const arregloOrdenado = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const elementoBuscado = 16;

const indiceEncontrado = busquedaBinaria(arregloOrdenado, elementoBuscado);
if (indiceEncontrado !== -1) 
{
    console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indiceEncontrado}`);
} else 
{
    console.log(`El elemento ${elementoBuscado} no se encuentra en el arreglo`);
}
// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   

function sumaElementos(arreglo) 
{
    let suma = 0;

    // Recorre cada elemento del arreglo una sola vez
    for (let i = 0; i < arreglo.length; i++) 
    {
        suma += arreglo[i];
    }

    return suma;
}
const miArreglo = [6, 4, 3, 8, 9];
const resultado = sumaElementos(miArreglo);
console.log(`La suma de los elementos del arreglo es: ${resultado}`);

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   

function mergeSort(arr) {
    // Si el arreglo tiene menos de 2 elementos, está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Divide el arreglo en dos mitades
    const medio = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, medio);
    const derecha = arr.slice(medio);

    // Llamadas recursivas para ordenar las mitades
    const izquierdaOrdenada = mergeSort(izquierda);
    const derechaOrdenada = mergeSort(derecha);

    // Combina las mitades ordenadas
    return merge(izquierdaOrdenada, derechaOrdenada);
}

function merge(izquierda, derecha) {
    let resultado = [];
    let i = 0;
    let j = 0;

    // Combina las dos mitades ordenadas en un solo arreglo ordenado
    while (i < izquierda.length && j < derecha.length) {
        if (izquierda[i] < derecha[j]) {
            resultado.push(izquierda[i]);
            i++;
        } else {
            resultado.push(derecha[j]);
            j++;
        }
    }

    // Agregar los elementos restantes
    while (i < izquierda.length) {
        resultado.push(izquierda[i]);
        i++;
    }
    while (j < derecha.length) {
        resultado.push(derecha[j]);
        j++;
    }

    return resultado;
}
const myArray = [38, 27, 43, 3, 9, 82, 10];
const ArregloOrdenado = mergeSort(myArray);
console.log("Arreglo ordenado:", ArregloOrdenado);

// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Encuentra el índice del elemento más pequeño en el subarreglo no ordenado
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Intercambia el elemento más pequeño con el primer elemento del subarreglo no ordenado
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
const _miArreglo = [64, 25, 12, 22, 11];
const _arregloOrdenado = selectionSort(_miArreglo);
console.log("Arreglo ordenado:", _arregloOrdenado);

// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   

function bubbleSort(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Convertir la matriz en un arreglo unidimensional para facilitar la clasificación
    const flatArray = matrix.flat();

    // Aplicar Bubble Sort al arreglo unidimensional
    for (let i = 0; i < flatArray.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < flatArray.length - 1 - i; j++) {
            // Comparar elementos adyacentes y hacer intercambio si es necesario
            if (flatArray[j] > flatArray[j + 1]) {
                [flatArray[j], flatArray[j + 1]] = [flatArray[j + 1], flatArray[j]];
                swapped = true;
            }
        }

        // Si no se hizo ningún intercambio en esta pasada, el arreglo está ordenado
        if (!swapped) {
            break;
        }
    }

    // Reconstruir la matriz ordenada a partir del arreglo unidimensional
    const sortedMatrix = [];
    let index = 0;

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(flatArray[index]);
            index++;
        }
        sortedMatrix.push(row);
    }

    return sortedMatrix;
}
const matriz = [
    [5, 3, 8],
    [10, 1, 4],
    [7, 6, 2]
];

console.log("Matriz original:");
console.log(matriz);

const matrizOrdenada = bubbleSort(matriz);

console.log("Matriz ordenada:");
console.log(matrizOrdenada);

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

function generarPermutaciones(lista) {
    // Función para generar todas las permutaciones de una lista de elementos
    const resultado = [];

    function backtrack(permutacionActual, elementosRestantes) {
        // Caso base: si no quedan elementos por permutar
        if (elementosRestantes.length === 0) {
            resultado.push(permutacionActual.slice()); // Agregar la permutación actual al resultado
            return;
        }

        for (let i = 0; i < elementosRestantes.length; i++) {
            // Elegir un elemento para colocar en la posición actual
            const elemento = elementosRestantes[i];

            // Generar nueva lista de elementos restantes sin el elemento seleccionado
            const nuevosElementosRestantes = elementosRestantes.filter((_, index) => index !== i);

            // Agregar el elemento seleccionado a la permutación actual
            permutacionActual.push(elemento);

            // Llamar recursivamente con la permutación actualizada y la nueva lista de elementos restantes
            backtrack(permutacionActual, nuevosElementosRestantes);

            // Retroceder (backtrack): remover el último elemento agregado para probar con otro
            permutacionActual.pop();
        }
    }

    // Iniciar el backtracking con una permutación vacía y la lista original de elementos
    backtrack([], lista);

    return resultado;
}
const listaDeElementos = ['a', 'b', 'c'];
const permutaciones = generarPermutaciones(listaDeElementos);
console.log(permutaciones);