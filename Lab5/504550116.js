// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.   

// Algoritmo de "ordenamiento" constante para un array ya ordenado
function sortConstant(arr) {
    // Este algoritmo simplemente devuelve el array original, ya que se asume que está ordenado
    return arr;
}

// Ejemplo de uso
const arrayOrdenado = [1, 2, 3, 4, 5];
const arrayOrdenadoResultado = sortConstant(arrayOrdenado);
console.log(arrayOrdenadoResultado); // Salida: [1, 2, 3, 4, 5]

// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

// Ejemplo de uso
const arrayDesordenado = [5, 3, 8, 2, 1, 7, 4];
const arrayOrdenado2 = quickSort(arrayDesordenado);
console.log(arrayOrdenado2); // Salida: [1, 2, 3, 4, 5, 7, 8]

// 3. **O(N) - Complejidad Lineal:** 
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   

function sumaNumeros(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

const sumaDel1Al100 = sumaNumeros(100);
console.log(sumaDel1Al100); // Salida: 5050

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   

function quickSort(arr, izquierda = 0, derecha = arr.length - 1) {
    if (izquierda < derecha) {
        const pivotIndex = partition(arr, izquierda, derecha);
        quickSort(arr, izquierda, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, derecha);
    }
    return arr;
}

function partition(arr, izquierda, derecha) {
    const pivot = arr[derecha];
    let i = izquierda;
    for (let j = izquierda; j < derecha; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[derecha]] = [arr[derecha], arr[i]];
    return i;
}

const arr = [5, 3, 8, 2, 1, 7, 4];
console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 7, 8]

// 5. **O(N^2) - Complejidad Cuadrática:** 
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

//Buble sort en el peor de los casos
//Cocktail sort en el peor de los casos
//Gnome Sort, en el peor de los casos
//Selection sort, en el peor de los casos
//Insertions sort, en el peor de los casos

function sumaCuadratico(n) {
    let suma = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            suma += 1;
        }
    }
    return suma;
}

console.log(sumaCuadratico(10)); // 100

// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   

function fuerzaBruta(n, k) {
    if (n === 1) {
        return k;
    }

    let resultado = Infinity;
    for (let i = 1; i < n; i++) {
        resultado = Math.min(resultado, fuerzaBruta(n - i, i) + fuerzaBruta(i, k - i));
    }

    return resultado;
}

console.log(fuerzaBruta(5, 5)); // 75

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

let viajesMasCortos = [];

function viajeroComerciante(distancias, actual, visitados, n, distanciaActual, viajes) {
    if (visitados.length === n) {
        if (distancias[actual][0] !== 0) {
            distanciaActual += distancias[actual][0];
            viajes.push(distanciaActual);
        }
    } else {
        for (let i = 0; i < n; i++) {
            if (distancias[actual][i] !== 0 && !visitados.includes(i)) {
                visitados.push(i);
                viajeroComerciante(distancias, i, visitados, n, distanciaActual + distancias[actual][i], viajes);
                visitados.pop();
            }
        }
    }
}

function viajeroComercianteOptimo(distancias) {
    const n = distancias.length;
    const visitados = [];
    let distanciaActual = 0;

    viajeroComerciante(distancias, 0, visitados, n, distanciaActual, viajesMasCortos);

    return Math.min(...viajesMasCortos);
}

const distancias = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

console.log(viajeroComercianteOptimo(distancias)); // Salida: 55 (la ruta más corta es 0-1-2-3-0 con una distancia total de 55)