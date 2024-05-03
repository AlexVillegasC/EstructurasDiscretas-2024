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
        // Si el array tiene 1 o menos elementos, devolverlo directamente porque ya está ordenado
        if (arr.length <= 1) {
            return arr;
        } else {
            // Seleccionar el último elemento como pivote
            const pivot = arr[arr.length - 1];

            // Dividir el array en dos sub-arreglos: uno con elementos menores que el pivote y otro con elementos mayores
            const left = [];
            const right = [];

            // Iterar sobre el array original, excluyendo el último elemento (el pivote)
            for (let i = 0; i < arr.length - 1; i++) {
                // Si el elemento es menor que el pivote, agregarlo al sub-arreglo de elementos menores
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                } else {
                    // Si el elemento es mayor o igual al pivote, agregarlo al sub-arreglo de elementos mayores
                    right.push(arr[i]);
                }
            }

            // Ordenar recursivamente los sub-arreglos y combinarlos con el pivote en el medio
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
    for (let i = 1; i <= n; i++) { //Recorre cada uno de los elementos y los utiliza para explicar
        suma += i;
    }
    return suma;
}

const sumaDel1Al100 = sumaNumeros(100);
console.log(sumaDel1Al100); // Salida: 5050

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   

    // Define la función quickSort que implementa el algoritmo de ordenamiento rápido
    function quickSort(arr, izquierda = 0, derecha = arr.length - 1) {
        // Si el índice izquierdo es menor que el derecho, se divide el arreglo en subarreglos más pequeños y se ordenan recursivamente
        if (izquierda < derecha) {
            // Se encuentra el índice del pivote utilizando la función partition
            const pivotIndex = partition(arr, izquierda, derecha);
            // Se ordenan recursivamente los subarreglos a la izquierda e izquierda del pivote
            quickSort(arr, izquierda, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, derecha);
        }
        // Devuelve el arreglo ordenado
        return arr;
    }

    // Define la función partition que encuentra el índice del pivote en un arreglo
    function partition(arr, izquierda, derecha) {
        // Se selecciona el último elemento del arreglo como pivote
        const pivot = arr[derecha];
        // Se inicializa un índice i en el extremo izquierdo del arreglo
        let i = izquierda;
        // Se itera sobre el arreglo desde el índice izquierdo hasta el penúltimo índice
        for (let j = izquierda; j < derecha; j++) {
            // Si el elemento en el índice j es menor o igual al pivote
            if (arr[j] <= pivot) {
                // Se intercambian los elementos en los índices i y j
                [arr[i], arr[j]] = [arr[j], arr[i]];
                // Se incrementa el índice i
                i++;
            }
        }
        // Se intercambia el pivote con el elemento en el índice i
        [arr[i], arr[derecha]] = [arr[derecha], arr[i]];
        // Devuelve el índice del pivote
        return i;
    }

    // Define un arreglo desordenado
    const arr = [5, 3, 8, 2, 1, 7, 4];
    // Llama a la función quickSort con el arreglo desordenado y muestra el arreglo ordenado en la consola
    console.log(quickSort(arr)); // Salida: [1, 2, 3, 4, 5, 7, 8]

// 5. **O(N^2) - Complejidad Cuadrática:** 
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

//Buble sort en el peor de los casos
//Cocktail sort en el peor de los casos
//Gnome Sort, en el peor de los casos
//Selection sort, en el peor de los casos
//Insertions sort, en el peor de los casos

    // Define la función sumaCuadratico que calcula la suma de n al cuadrado
    function sumaCuadratico(n) {
        // Inicializa la variable suma en 0
        let suma = 0;

        // Iterar sobre el rango de 0 a n - 1
        for (let i = 0; i < n; i++) {
            // Iterar sobre el rango de 0 a n - 1
            for (let j = 0; j < n; j++) {
                // Agrega 1 a la variable suma en cada iteración
                suma += 1;
            }
        }

        // Devuelve la suma
        return suma;
    }

// Llama a la función sumaCuadratico con el parámetro n y muestra el resultado en la consola
console.log(sumaCuadratico(10)); // Salida: 100

// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   

    // Define la función recursiva fuerzaBruta que resuelve el problema del cambio utilizando fuerza bruta
    function fuerzaBruta(n, k) {
        // Si n es igual a 1, se devuelve k, ya que se necesitan k monedas de 1 centavo para hacer n centavos
        if (n === 1) {
            return k;
        }

        // Inicializa la variable resultado con un valor infinito
        let resultado = Infinity;

        // Iterar sobre todas las posibles combinaciones de monedas
        for (let i = 1; i < n; i++) {
            // Calcula el número mínimo de monedas necesarias para hacer n - i centavos utilizando i monedas
            const minMonedasNMenosI = fuerzaBruta(n - i, i);

            // Calcula el número mínimo de monedas necesarias para hacer i centavos utilizando k - i monedas
            const minMonedasI = fuerzaBruta(i, k - i);

            // Actualiza el resultado con el mínimo de resultado y la suma de minMonedasNMenosI y minMonedasI
            resultado = Math.min(resultado, minMonedasNMenosI + minMonedasI);
        }

        // Devuelve el resultado
        return resultado;
    }

// Llama a la función fuerzaBruta con los parámetros n y k y muestra el resultado en la consola
console.log(fuerzaBruta(5, 5)); // Salida: 75

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

    // Inicializa un array vacío para almacenar las distancias más cortas de cada ruta
    let viajesMasCortos = [];

    // Define la función recursiva para encontrar la ruta más corta
    function viajeroComerciante(distancias, actual, visitados, n, distanciaActual, viajes) {
        // Si ya se han visitado todas las ciudades, agrega la distancia actual a la lista de distancias más cortas
        if (visitados.length === n) {
            if (distancias[actual][0] !== 0) {
                distanciaActual += distancias[actual][0];
                viajes.push(distanciaActual);
            }
        } else {
            // Iterar sobre todas las ciudades adyacentes a la actual
            for (let i = 0; i < n; i++) {
                // Si la ciudad i no ha sido visitada y hay una distancia definida entre la ciudad actual y la i
                if (distancias[actual][i] !== 0 && !visitados.includes(i)) {
                    // Agrega la ciudad i a la lista de visitados
                    visitados.push(i);
                    // Llama recursivamente a la función con la ciudad i como actual
                    viajeroComerciante(distancias, i, visitados, n, distanciaActual + distancias[actual][i], viajes);
                    // Elimina la ciudad i de la lista de visitados
                    visitados.pop();
                }
            }
        }
    }

    // Define la función principal para encontrar la ruta más corta
    function viajeroComercianteOptimo(distancias) {
        // Inicializa las variables necesarias
        const n = distancias.length;
        const visitados = [];
        let distanciaActual = 0;

        // Llama a la función recursiva con las variables inicializadas
        viajeroComerciante(distancias, 0, visitados, n, distanciaActual, viajesMasCortos);

        // Devuelve la distancia más corta de la lista de distancias más cortas
        return Math.min(...viajesMasCortos);
    }

    // Define el array de distancias entre las ciudades
    const distancias = [
        [0, 10, 15, 20],
        [10, 0, 35, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0]
    ];

    // Imprime la distancia más corta de la ruta más corta
    console.log(viajeroComercianteOptimo(distancias)); // Salida: 55 (la ruta más corta es 0-1-2-3-0 con una distancia total de 55)