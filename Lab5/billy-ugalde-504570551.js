// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.

//Sin importar el tamaño del arreglo miVector, el algoritmo siempre accede directamente
//al  primer elemento del vector, realizando una única operación, esto hace
//que su complejidad sea O(1).
function obtenerPrimerElemento(vector) {
    return vector[0]; // Accede directamente al primer elemento del vector
}
// Ejemplo de uso
let miVector = [11, 9, 600, 200];
console.log("Mostrando primer elemento del arreglo: " + obtenerPrimerElemento(miVector)); // Output: 5



// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.

//La complejidad O(log N) proviene de cómo el algoritmo reduce repetidamente el tamaño del número en cada iteración.
//Al dividir el número dado por 2 en cada paso, el espacio de búsqueda se reduce a la mitad en cada iteración.
//Por lo tanto, el número de iteraciones necesarias para reducir el número a 1 está limitado por el logaritmo en base 2 del número inicial.
//Por ejemplo, si el número inicial es 32, se necesitarán alrededor de 5 iteraciones (ya que 32 / 2^5 = 1), lo que hace que la complejidad sea O(log N).

// Este algoritmo encuentra el exponente más grande de 2 que es menor o igual que un número dado
function encontrarExponenteDeDos(numero) {
    let exponente = 0;
    while (numero > 1) { //itera si el numero es mayor a 1
        numero = numero / 2; // Divide el número por 2 en cada iteración
        exponente++; //incrementa en cada vuelta el exponente
    }
    return exponente; // retorna el exponente
}

// Ejemplo de uso
let numero1 = 16;
let exponente1 = 0;
while (numero1 > 1) {
    numero1 = numero1 / 2;
    exponente1++;
}
console.log("Exponente de 2 para", 16, ":", exponente1);
//segundo ejemplo
let numero2 = 32;
let exponente2 = 0;
while (numero2 > 1) {
    numero2 = numero2 / 2;
    exponente2++;
}
console.log("Exponente de 2 para", 32, ":", exponente2);


// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.

//La complejidad del algoritmo es O(N) porque el tiempo de ejecución del algoritmo aumenta linealmente con el tamaño de la entrada. En este caso, el tamaño de la entrada está representado por la longitud del vector, es decir, el número de elementos que contiene.
// Este algoritmo calcula la suma de todos los elementos en un vector
function calcularSuma(vector) {
    let suma = 0;
    for (let i = 0; i < vector.length; i++) { //recorre el vector
        suma += vector[i]; // Suma cada elemento del vector
    }
    return suma; // retorna la suma
}

// Ejemplo de uso
let array = [1, 2, 3, 4, 5];
console.log("La suma de los elementos del vector es:", calcularSuma(array)); // Output: 15


// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.

//Este algoritmo primero encuentra el máximo en el array utilizando una búsqueda lineal, lo que tiene una complejidad O(N).
//Luego, realiza una búsqueda binaria en el subarray restante para encontrar el índice del máximo, lo que tiene una complejidad O(log N).
// En conjunto, esto resulta en una complejidad O(N log N).

// Este algoritmo encuentra el número máximo en un array utilizando búsqueda lineal y luego realiza búsqueda binaria en el subarray restante
function encontrarMaximo(array) {
    // Búsqueda lineal para encontrar el máximo
    let maximo = array[0]; 
    for (let i = 1; i < array.length; i++) { // recorremos
        if (array[i] > maximo) { // Si encontramos un elemento mayor que el máximo actual
            maximo = array[i]; // Actualizamos el máximo
        }
    }

    // Búsqueda binaria
    let inicio = 0; // Índice de inicio del arreglo
    let fin = array.length - 1; // Índice de fin del arreglo
    while (inicio <= fin) { // Mientras haya elementos en el arreglo
        let medio = inicio + ((fin - inicio) / 2 | 0); // Calculamos el punto medio 
        if (array[medio] === maximo) { // Si el elemento en el punto medio es igual al máximo encontrado
            return medio; // Retornamos el índice del máximo
        } else if (array[medio] < maximo) { // Si el elemento en el punto medio es menor que el máximo
            inicio = medio + 1; // Descartamos la mitad izquierda del subarray
        } else { // Si el elemento en el punto medio es mayor que el máximo
            fin = medio - 1; // Descartamos la mitad derecha del subarray
        }
    }

    return -1; // Esto no debería ocurrir si el máximo se encuentra en el arreglo
}

// Ejemplo de uso
let numeros = [10, 3, 6, 20, 15, 9,100];
let indiceDelMaximo = encontrarMaximo(numeros);
console.log("El índice del máximo es:", indiceDelMaximo);


// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

//En este algoritmo, tenemos dos bucles anidados. El bucle externo itera sobre cada elemento del array, mientras que el bucle interno itera sobre los elementos restantes en el array. Para cada elemento en el bucle externo, el bucle interno realiza una comparación con cada uno de los elementos restantes.
//Esto significa que para cada elemento en el array, estamos realizando N comparaciones en el peor de los casos.
//Entonces, si tenemos N elementos en el array, el número total de comparaciones será N * N, lo que resulta en una complejidad de O(N^2). Esto se debe a que el número total de operaciones (comparaciones en este caso) es proporcional al cuadrado del tamaño de la entrada (N).

// Este algoritmo realiza una búsqueda de pares de elementos duplicados en un array
function encontrarDuplicados(array) {
    let duplicados = []; // Array para almacenar los pares duplicados encontrados
    for (let i = 0; i < array.length; i++) { // Itera sobre cada elemento del array (N veces)
        for (let j = i + 1; j < array.length; j++) { // Itera sobre los elementos restantes del array (N veces)
            if (array[i] === array[j]) { // Compara el elemento actual con los elementos restantes
                duplicados.push([array[i], array[j]]); // Si hay duplicados, los agrega al array de duplicados
            }
        }
    }
    return duplicados; // Retorna el array de pares duplicados
}

// Ejemplo de uso
let Num = [2, 3, 4, 2, 6, 4, 7, 8, 2];
let paresDuplicados = encontrarDuplicados(Num);
console.log("Pares duplicados:", paresDuplicados);


// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.



//Este algoritmo genera todos los subconjuntos posibles de un conjunto dado utilizando la recursión. En cada llamada recursiva, se generan dos subconjuntos: uno que incluye el elemento actual y otro que no lo incluye. Debido a este proceso,
// el número total de subconjuntos generados es 2 ^ N, donde N es el tamaño del conjunto de entrada.Por lo tanto, la complejidad del algoritmo es O(2 ^ N), ya que el número de operaciones aumenta exponencialmente con el tamaño de la entrada.

// Este algoritmo genera todas las combinaciones de subconjuntos de un conjunto dado
function generarSubconjuntos(conjunto) {
    let subconjuntos = []; // Array para almacenar los subconjuntos generados
    generar([], 0); // Llama a la función auxiliar para generar los subconjuntos

    // Función auxiliar para generar subconjuntos recursivamente
    function generar(subset, indice) {
        subconjuntos.push(subset); // Agrega el subconjunto actual al array de subconjuntos
        for (let i = indice; i < conjunto.length; i++) { // Itera sobre los elementos restantes del conjunto
            generar(subset.concat(conjunto[i]), i + 1); // Llama recursivamente a la función para generar subconjuntos adicionales
        }
    }

    return subconjuntos; // Retorna todos los subconjuntos generados
}

// Ejemplo de uso
let conjunto = [1, 2, 3];
let subconjuntos = generarSubconjuntos(conjunto);
console.log("Subconjuntos:", subconjuntos);

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

//En resumen, el algoritmo utiliza la recursión para generar todas las posibles permutaciones de un conjunto.
//Cada llamada recursiva crea un número exponencialmente creciente de subproblemas, lo que resulta en una complejidad factorial O(N!).
//Esto puede volverse muy ineficiente para conjuntos grandes debido al crecimiento exponencial del número de permutaciones.


// Este algoritmo genera todas las permutaciones posibles de un array dado
function generarPermutaciones(array) {
    let permutaciones = []; // Array para almacenar las permutaciones generadas
    permutar(array, 0); // Llama a la función auxiliar para generar las permutaciones

    // Función auxiliar para generar permutaciones recursivamente
    function permutar(array, indice) {
        if (indice === array.length - 1) { // Si llegamos al final del array
            permutaciones.push(array.slice()); // Agregamos la permutación actual al array de permutaciones
        } else {
            for (let i = indice; i < array.length; i++) { // Iteramos sobre los elementos restantes del array
                // Intercambiamos los elementos en los índices 'indice' e 'i'
                [array[indice], array[i]] = [array[i], array[indice]];
                // Llamamos recursivamente a la función para generar permutaciones adicionales
                permutar(array, indice + 1);
                // Deshacemos el intercambio para restaurar el estado original del array
                [array[indice], array[i]] = [array[i], array[indice]];
            }
        }
    }

    return permutaciones; // Retorna todas las permutaciones generadas
}

// Ejemplo de uso
let arreglo = [1, 2, 3];
let permutaciones = generarPermutaciones(arreglo);
console.log("Permutaciones:", permutaciones);

