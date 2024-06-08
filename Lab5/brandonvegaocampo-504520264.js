

// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.  

function devuelveTercero(array) { // Devuelve el tercer numero del arreglo

    return array[2]; // El indice comienza en cero, asi que el tercero es el indice 2

}

let miArray = [4, 6, 1, 3, 8];

console.log(devuelveTercero(miArray));  // Output: 1



// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   

function busquedaBinaria(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {

            return mid;  // El elemento fue encontrado y se devuelve su índice

        } else if (arr[mid] < target) {

            left = mid + 1; // El objetivo está en la mitad derecha

        } else {

            right = mid - 1;  // El objetivo está en la mitad izquierda

        }
    }

    return -1;  // El elemento no fue encontrado
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target1 = 4;
const result1 = busquedaBinaria(arr, target);

console.log(result);  // Salida: 3



// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   

function busquedaLineal(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {

            return i;  // Se devuelve el índice si se encuentra el elemento

        }
    }

    return -1;  // Si no se encuentra el elemento, se devuelve -1
}

const array2 = [3, 5, 2, 8, 1, 9];
const target2 = 8;
const result2 = busquedaLineal(arr, target);

console.log(result);  // Salida: 3 (índice del elemento 8 en el arreglo)



// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   

function mergeSort(arr) {
    
    if (arr.length <= 1) {

        return arr; // Paso base: si el arreglo tiene 0 o 1 elementos, está ordenado

    }
   
    const middle = Math.floor(arr.length / 2);  // Divide el arreglo en mitades
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right)); // Combina y ordena recursivamente las mitades izquierda y derecha

}

function merge(left, right) {

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) { 

        if (left[leftIndex] < right[rightIndex]) {  // Compara los elementos de los dos arreglos y los fusiona en orden ascendente

            result.push(left[leftIndex]);
            leftIndex++;

        } else {

            result.push(right[rightIndex]);
            rightIndex++;

        }
    }

    // v Concatena los elementos restantes de los dos arreglos y si alguno de los arreglos tiene elementos restantes, se agregan al resultado
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


const array3 = [3, 5, 2, 8, 1, 9];
const sortedArr1 = mergeSort(arr);

console.log(sortedArr);  // Salida: [1, 2, 3, 5, 8, 9]



// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

function bubbleSort(arr) {

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) { // Iterar sobre todos los elementos del arreglo

        // v Cuando sus ultimos i elementos ya están en su lugar, itera sobre los elementos restantes
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) { // Intercambiar si el elemento actual es mayor que el siguiente

                let temp = arr[j]; // Intercambio de elementos
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }

    return arr; // Devolver el arreglo ordenado

}


const array4 = [3, 5, 2, 8, 1, 9];
const sortedArr2 = bubbleSort(arr);

console.log(sortedArr);  // Salida: [1, 2, 3, 5, 8, 9]



// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   

function crearSubconjuntos(set) {

    const subsets = [];

    function backtrack(index, subconjAct) { // Función recursiva para generar los subconjuntos

        subsets.push(subconjAct.slice()); // Agregar el subconjunto actual a la lista de subconjuntos

        for (let i = index; i < set.length; i++) { // Iterar sobre los elementos restantes del conjunto

            subconjAct.push(set[i]);// Incluir el elemento actual en el subconjunto

            backtrack(i + 1, subconjAct); // Generar recursivamente los subconjuntos con el elemento actual incluido

            subconjAct.pop(); // Eliminar el elemento actual para generar los subconjuntos sin él

        }
    }

    backtrack(0, []); // Iniciar la generación de subconjuntos con un subconjunto vacío y el índice 0

    return subsets;

}

const set = [1, 2, 3];
const allSubsets = crearSubconjuntos(set);

console.log(allSubsets);



// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

function generatePermutations(arr) {

    const permutaciones = [];

    function backtrack(index) { // Función recursiva para generar las permutaciones

        if (index === arr.length - 1) { // Si el índice alcanza el final del arreglo, se agrega la permutación actual

            permutaciones.push(arr.slice());
            return;

        }

       
        for (let i = index; i < arr.length; i++) {  // Iterar sobre los elementos restantes del arreglo

            [arr[index], arr[i]] = [arr[i], arr[index]]; // Intercambiar el elemento en la posición actual con el elemento en la posición i

            backtrack(index + 1);// Generar recursivamente las permutaciones con el elemento actual fijo en la posición index

            [arr[index], arr[i]] = [arr[i], arr[index]];// Deshacer el intercambio para restaurar el arreglo a su estado original

        }
    }

    backtrack(0); // Iniciar la generación de permutaciones con el índice 0

    return permutaciones;
    
}


const array5 = [1, 2, 3];
const allPermutations = generatePermutations(arr);

console.log(allPermutations);